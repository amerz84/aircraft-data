import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';
import { headers } from '../shared/header-names';
import { Person } from '../shared/person';


@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  headerValues = [];
  _isTableLoaded: boolean;
  // Mat Table directives
  dataSource: MatTableDataSource<Person>;
  displayedColumns: string[] = headers; //Table headers (initial row)

  @ViewChild(MatPaginator) paginator: MatPaginator;
  static isTableLoaded: boolean;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  tempSource: MatTableDataSource<Person>; //Used to repopulate original file data after clearFilter() called
  faFileUpload = faFileUpload; //binding for the file upload icon

  constructor(private uploadService: DataService) {
    this.dataSource = new MatTableDataSource<Person>([]);
    this.tempSource = new MatTableDataSource<Person>([]);
    this._isTableLoaded = false;
  }

  //Call on data-upload service to load file
  refresh(event: any) {
    //Listen for changes to loaded file data and populate table with data from dataSource
    this.uploadService.onFileChange(event).subscribe((data: Person[]) => {
      
      this.dataSource.data = data;
      this.tempSource.data = data;      
      this.dataSource.connect();
      this._isTableLoaded = true;
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

  //
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

  //Clear all table filters and display original data
  clearFilter() {
    this.dataSource.data = this.tempSource.data;
  }

  //Save file
  downloadTableAsCSV(table_id: string) {
    this.uploadService.saveFile(table_id);
  }

  getHeaderValues(index: number) {
    return this.uploadService.getFormattedHeaderData(index);
  }

  get isTableLoaded() {
    return this._isTableLoaded;
  }
}
