import { Injectable } from '@angular/core';
import { Observable, Subscriber, throwError } from 'rxjs';
import * as XLSX from 'xlsx';

import { headersAll } from '../shared/column-arrays';


@Injectable({
  providedIn: 'root'
})
export class DataImportService {
  //Aircraft header data info
  firstRowDataArray = [];
  formattedHeaderArray = [];

  //Convert file data into Observable array for table display
  onFileChange(event: any, isFromDropZone = false): Observable<any> {
    const target: DataTransfer = <DataTransfer>(event.target);
    const reader: FileReader = new FileReader();

    // Read raw binary contents from selected file. Will fire OnLoad event upon completion
    // If drop zone used to upload file, DataTransfer class won't work
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

        // Format the raw data string into 2-d array starting from cell A3. Dates formatted. Headers taken from column-arrays.ts
        const excelData = (XLSX.utils.sheet_to_json(worksheet, {range:3, header:headersAll, raw:false, dateNF:'yyyy-mm-dd'}));
        observer.next(excelData);
        observer.complete(); 
      }
    });
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
    const filename = 'Aircraft_data_' + new Date().toLocaleDateString() + '.csv';
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
}

