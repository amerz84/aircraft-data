import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  excelData: Array<Person>;

  //Convert file data into Observable array for table display
  onFileChange(event: any, isFromDropZone = false): Observable<any> {
    const target: DataTransfer = <DataTransfer>(event.target);
    const reader: FileReader = new FileReader();

    // Read raw binary contents from selected file. Will fire OnLoad event upon completion
    // If drop zone used to upload file, DataTransfer class won't work
    if (isFromDropZone) {
      reader.readAsBinaryString(event.dataTransfer.items[0].getAsFile());
    }
    else {
    reader.readAsBinaryString(target.files[0]);
    }

    return new Observable((observer: Subscriber<any[]>): void => {
      // .onload needs to be defined prior to firing event from .readAsBinaryString
      reader.onload = (e: any) => {
        // Store result of reader.readAsBinaryString
        const binaryStr: string = e.target.result;

        const workbook: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        // Format the raw data string into 2-d array with headers in row 1
        const excelData = (XLSX.utils.sheet_to_json(worksheet));

        observer.next(excelData);
        observer.complete();        
      }
    });
  }

  //Save currently displayed table data (with header) as .csv file
  saveFile(table_id: string, separator = ',') {
    // Select rows from table_id
    const rows = document.querySelectorAll('table#' + table_id + ' tr');
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
}

export class Person {
  id: number;
  name: string;
  salary: number;
  age: number;
}
