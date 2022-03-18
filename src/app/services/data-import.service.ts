import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscriber } from 'rxjs';
import { DateTimeUtility } from 'src/app/utils/datetime-utils';
import * as XLSX from 'xlsx';
import { headersAll } from '../utils/column-arrays';
import { FileReaderService } from './file-reader.service';

@Injectable({
  providedIn: 'root'
})
export class DataImportService {
  private _originalRecordCount: number;  //# of rows of (non-header) data on spreadsheet
  private _fileCounter = new BehaviorSubject(0);
  fileCounter$ = this._fileCounter.asObservable();
  fileCount = 0;

  //Data for chart component
  _chtData: string[] = [];
  _egtData: string[] = [];
  private _flightTimesArray: string[] = [];
  fuelUsed: number = 0;

  //Date for map component
  private _latitudeData: string[] = [];
  private _longitudeData: string[] = [];

  //Aircraft header data info
  ///////////////////////////////////////////////////
  firstRowDataArray = [];               //NOTE : TAKE OUT WHEN MIGRATING TO IQ DATA ///////////////////////////////
  ///////////////////////////////////////////////////
  formattedHeaderArray = [];
  columnHeaderArray = [];
  private _flightDate = new BehaviorSubject(null);
  flightDate$ = this._flightDate.asObservable();
  private _flightDuration = new BehaviorSubject(null);
  flightDuration$ = this._flightDuration.asObservable();
  UTCTimeColumn: any[] = [];

  constructor(private converter: DateTimeUtility, private fileReaderService: FileReaderService) {}

  //Convert file data into Observable array for table display
  onFileChange(): Observable<any> {
    return this.readFlightDataCSV();    
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
  getFormattedAircraftInfo(index: number) {
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

  readFlightDataCSV() {
    // reader.onload has 2 functions here:
    // 1 - Parses out specific column data used for map/chart components (e.g. all CHT columns, CHT1-CHT6)
    // 2 - Parses out entire spreadsheet data for use in table component
    return new Observable((observer: Subscriber<any[]>): void => {
  
      this.fileReaderService.getDemoFile().subscribe(res => {
        const binaryStr = res;
        const workbook: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

        //Set starting row to first row with "good" data (date !== 01/01/0001 && time !== around midnight)
        const dateTimeArray: any[] = (XLSX.utils.sheet_to_json(worksheet, {range:"A3:B200", blankrows:false}));
        const rowToStartFrom = (3 + this.checkNumRowsToExclude(dateTimeArray));

        //Get date of flight MM/DD/YY
        //Add 1 in case rowtoStartFrom === 0
        this._flightDate.next(worksheet["A" + (1 + rowToStartFrom).toString()].w);

        //Get latitude and longitude column data for map component
        //Remove whitespace-only cells and copy arrays to filtered arrays
        this._latitudeData = (XLSX.utils.sheet_to_json(worksheet, {range:"SS3:SS45000", blankrows:false}));
        this._longitudeData = (XLSX.utils.sheet_to_json(worksheet, {range:"SW3:SW45000", blankrows:false}));

        //Get CHT and EGT column data for chart component
        this._chtData = (XLSX.utils.sheet_to_json(worksheet, {range:"VA3:VM45000", blankrows:false}));
        this._egtData = (XLSX.utils.sheet_to_json(worksheet, {range:"TK3:TU45000", blankrows:false}));

        //Get time values from first and last rows to determine duration of flight
        this.UTCTimeColumn = this.converter.formatTimeArray(XLSX.utils.sheet_to_json(worksheet, {range:"B3:B45000", blankrows:false}), rowToStartFrom - 3);
        this.setFlightDuration(this.UTCTimeColumn);

        // Format the raw data string into 2-d array starting from cell A3. Dates formatted. Headers taken from column-arrays.ts
        const excelData = (XLSX.utils.sheet_to_json(worksheet, {range:rowToStartFrom, header:headersAll.map(col => col.name), raw:false, dateNF:'yyyy-mm-dd'}));
        observer.next(excelData);

        //Store number of data rows from spreadsheet
        //// Used by chart component for determining flight length
        this._originalRecordCount = excelData.length;

        //Set amount of fuel used (in gallons)
        this.fuelUsed = worksheet["LO" + rowToStartFrom].w
          - worksheet["LO" + (rowToStartFrom + this._originalRecordCount)].w;

        this.fileCount++;
        this._fileCounter.next(this.fileCount);

        observer.complete();           
        });       
    });
  }

  /**
   * Takes first and last valid entries for "UTC Time" and pushes to 2-element array. Used for calculating overall flight/log duration
   */
  setFlightDuration(flightTimesArray: any[]) {  
    this._flightTimesArray = []; 
    this._flightTimesArray.push(flightTimesArray[0]);
    this._flightTimesArray.push(flightTimesArray.slice(-1)[0]);

    this._flightDuration.next(this.converter.getTimeDiff(this._flightTimesArray));
  }

  /**
   * 
   * @returns number of rows with "bad"/unsynchronized data (Date = 01/01/0001 or Time starting from midnight)
   */
  checkNumRowsToExclude(dateTimeArray: any[]): number {
    let numRowsToExclude = 0;

    dateTimeArray.forEach(obj => {
      for (const [key, value] of Object.entries<any>(obj)) {
        if(key.trim() === "UTC Date" && value === 36892) {
          numRowsToExclude++;
          break;
        }
        if(key.trim() === "UTC Time" && value.trim().startsWith("00:00")) {
          numRowsToExclude++;
        }
      }
    });
    return numRowsToExclude;
  }

  getFuelUsed(): Observable<number> {
    return of(this.fuelUsed);
  }
}

