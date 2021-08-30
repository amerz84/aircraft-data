import { Injectable } from '@angular/core';
import { Observable, Subscriber, throwError } from 'rxjs';
import * as XLSX from 'xlsx';
import { headersAll } from '../utils/column-arrays';

@Injectable({
  providedIn: 'root'
})
export class DataImportService {
  private _originalRecordCount: number;  //# of rows of (non-header) data on spreadsheet

  //Data for chart component
  _chtData: string[] = [];
  _egtData: string[] = [];
  private _flightTimesArray: string[] = [];

  //Date for map component
  private _latitudeData: string[] = [];
  private _longitudeData: string[] = [];

  //Aircraft header data info
  ///////////////////////////////////////////////////
  firstRowDataArray = [];               //NOTE : TAKE OUT WHEN MIGRATING TO IQ DATA ///////////////////////////////
  ///////////////////////////////////////////////////
  formattedHeaderArray = [];

  //Convert file data into Observable array for table display
  onFileChange(event: any, isFromDropZone = false): Observable<any> {
    const target: DataTransfer = <DataTransfer>(event.target);
    const reader: FileReader = new FileReader();

    // Read raw binary contents from selected file. Will fire reader.onLoad event upon completion
    // readAsBinaryString() has two overloads used here:
    // 1 - Using drop zone: event.dataTransfer
    // 2 - Using file upload button: event.target
    if (isFromDropZone) {
      //Check for invalid drops
      try {
      reader.readAsBinaryString(event.dataTransfer.items[0].getAsFile());
      }
      catch(error) {
        return throwError(error);
      }
    }
    else {
    reader.readAsBinaryString(target.files[0]);
    }

    // reader.onload has 2 functions here:
    // 1 - Parses out specific column data used for map/chart components (e.g. all CHT columns, CHT1-CHT6)
    // 2 - Parses out entire spreadsheet data for use in table component
    return new Observable((observer: Subscriber<any[]>): void => {
      reader.onload = (e: any) => {
        const binaryStr: string = e.target.result; // Store result of reader.readAsBinaryString
        const workbook: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

        // Store value of cells in row A for header/identification data 
        for (let i=0; i<7; i++) {
          let cell = worksheet[this.nextChar(i+1) + 1];
          this.firstRowDataArray[i] = (cell ? cell.v : undefined);
        }
        //Remove "noise" from header cells and store only the desired values in formatted array for the "View File Info" component
        this.formatFirstRowData();

        //Get latitude and longitude column data for map component
        //Remove whitespace-only cells and copy arrays to filtered arrays
        this._latitudeData = (XLSX.utils.sheet_to_json(worksheet, {range:"E3:E45000", blankrows:false}));
        this._longitudeData = (XLSX.utils.sheet_to_json(worksheet, {range:"F3:F45000", blankrows:false}));

        //Get CHT and EGT column data for chart component
        this._chtData = (XLSX.utils.sheet_to_json(worksheet, {range:"AE3:AJ45000", blankrows:false}));
        this._egtData = (XLSX.utils.sheet_to_json(worksheet, {range:"AK3:AP45000", blankrows:false}));

        //Get local time values from first and last rows to determine duration of flight
        const localTimeColumn = (XLSX.utils.sheet_to_json(worksheet, {range:"B3:B45000", blankrows:false}));
        this._flightTimesArray.push(localTimeColumn[0][" Lcl Time"].trim());
        this._flightTimesArray.push(localTimeColumn.slice(-1)[0][" Lcl Time"].trim());

        // Format the raw data string into 2-d array starting from cell A3. Dates formatted. Headers taken from column-arrays.ts
        const excelData = (XLSX.utils.sheet_to_json(worksheet, {range:3, header:headersAll.map(col => col.name), raw:false, dateNF:'yyyy-mm-dd'}));
        observer.next(excelData);

        //Store number of data rows from spreadsheet
        //// Used by chart component for determining flight length
        this._originalRecordCount = excelData.length;

        observer.complete(); 
      }
    });
  }

  get latitudeData() {
    return this._latitudeData;
  }

  get longitudeData() {
    return this._longitudeData;
  }

  get flightTimesArray() {
    return this._flightTimesArray;
  }

  get originalRecordCount() {
    return this._originalRecordCount;
  }

  /////////////////////////////////////////////////
  //Save currently displayed table data (with header) as .csv file
  saveFile(table_id: string, separator = ',') {
    // Select rows from table_id
    const rows = document.querySelectorAll('#' + table_id + ' tr');
    // Structure and fill out data table
    const csv = [];
    for (let i = 0; i < rows.length; i++) {
      const row = [], cols = rows[i].querySelectorAll('td, th');
      for (let j = 0; j < cols.length; j++) {
          // Clean innertext to remove multiple spaces and jumpline (break csv)
          let data = cols[j].textContent.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
          // Escape double-quote with double-double-quote
          data = data.replace(/"/g, '""');
          // Push escaped string
          row.push('"' + data + '"');
      }
      csv.push(row.join(separator));
    }

    const csv_string = csv.join('\n');
    //Create file and prompt for open/save
    //NOTE - if there are filters applied to the table, this will only include the filtered data, not the original table data
    const filename = 'Insert_File_Name' + new Date().toLocaleDateString() + '.csv';
    const link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /////////////////////////////////////////////////
  //Get next sequential ASCII character
  //Used in return statement of onFileChange() to iterate over first row of csv data (ex. cell A1, B1, C1, etc.)
  nextChar(index: number) {
    return String.fromCharCode('A'.charCodeAt(0) + index);
  }

  /////////////////////////////////////////////////
  //Parse out the important data from the csv header row.
  //Example input/output:
  //unit_software_version="14.04" -------> "14.04"
  formatFirstRowData() {
    for (let i=0; i<this.firstRowDataArray.length; i++) {
      //Take substring value in between quotation marks in string
      if (this.firstRowDataArray[i].indexOf('"') != -1) {
        this.formattedHeaderArray[i] = this.firstRowDataArray[i].match(/"([^']+)"/)[1];        
      }
      //Last value does not contain quotes in string, instead take substring value AFTER "="
      else {
        this.formattedHeaderArray[i] = this.firstRowDataArray[i].substring(this.firstRowDataArray[i].indexOf('=') + 1);
      }
    }
  }

  /////////////////////////////////////////////////
  //Send formatted string values back to dialog component
  getFormattedHeaderData(index: number) {
    return this.formattedHeaderArray[index];
  }

  ////////////////////////////////////////////
  //Return 2D array of CHT data
  get chtData() {
    return this._chtData;
  }

  ////////////////////////////////////////////
  //Return 2D array of EGT data
  get egtData() {
    return this._egtData;
  }
}

