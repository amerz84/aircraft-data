import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService, Person } from '../data.service';


@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  // Mat Table directives
  dataSource: MatTableDataSource<Person>;
  displayedColumns: string[] = ['name', 'salary', 'age']; //Table headers (initial row)
  
  tempSource: MatTableDataSource<Person>; //Used to repopulate original file data after clearFilter() called
  faFileUpload = faFileUpload; //binding for the file upload icon

  constructor(private uploadService: DataService, private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource<Person>([]);
    this.tempSource = new MatTableDataSource<Person>([]);
  }

  //Call on data-upload service to load file
  refresh(event: any) {
    //Listen for changes to loaded file data and populate table with data from dataSource
    this.uploadService.onFileChange(event).subscribe((data: Person[]) => {
      
      this.dataSource.data = data;
      this.tempSource.data = data;      
      this.dataSource.connect();
    });
  }

  onDrop(event: any) {
    //Override browser handler
    event.stopPropagation();
    event.preventDefault();

    this.uploadService.onFileChange(event, true).subscribe((data: Person[]) => {      
      this.dataSource.data = data;
      this.tempSource.data = data;      
      this.dataSource.connect();
    });
  }

  onDragOver(event: any) {
    event.stopPropagation();
    event.preventDefault();
    document.getElementById('drop_zone').classList.add('isDragover');
  }

  onDragEnd() {
    document.getElementById('drop_zone').classList.remove('isDragover');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  applyFilter() {
    const matchFilter = [];
    
    this.dataSource.data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
          if(key == "Salary" && value > "10000") {
            //console.log(`${key} ${value}`);
            matchFilter.push(obj);
          }
      });
      
    });
    this.dataSource.data = matchFilter;
  }

  clearFilter() {
    this.dataSource.data = this.tempSource.data;
  }

  downloadTableAsCSV(table_id) {
    const table = <HTMLTableElement>document.getElementById(table_id);

    // Change to "< 1" if not using table headers
    if (table.rows.length < 2) {
      this.openSnackBar("Please upload a file before saving", "OK");
    }
    else {
      this.uploadService.saveFile(table_id);
    }
  }
}
