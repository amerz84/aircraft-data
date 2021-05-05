import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';
import { headers, headersUnusedRemoved } from '../shared/header-names';
import { Person } from '../shared/person';


@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  headerValues = [];
  isToggled: boolean;
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
    this.isToggled = false;
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
  applyGPSFilter() {
    const matchFilter = [];
    
    this.dataSource.data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
          if(key == "GPSfix" && (value.trim() == "3D" || value.trim() == "3DDiff")) {
            //console.log(`${key} ${value}`);
            matchFilter.push(obj);
          }
      });
      
    });
    this.dataSource.data = matchFilter;
  }

  applyTemperatureFilter() {
    const matchFilter = [];
    
    this.dataSource.data.forEach(obj => {
      for (const [key, value] of Object.entries(obj)) {
          if(key == "E1CHT1" && parseInt(value.trim()) >= 1100) {
            console.log(`${key} ${value}`);
            matchFilter.push(obj);
            return;
          }
          if(key == "E1CHT2" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1CHT3" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1CHT4" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1CHT5" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1CHT6" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1EGT1" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1EGT2" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1EGT3" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1EGT4" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1EGT5" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
          if(key == "E1EGT6" && parseInt(value.trim()) >= 1100) {
            matchFilter.push(obj);
            return;
          }
      }      
    });
    this.dataSource.data = matchFilter;
  }

  //Clear all table filters and display original data
  clearFilter() {
    this.dataSource.data = this.tempSource.data;
  }

  //Toggle display of unimportant columns. Boolean is toggled in onClick method in html file
  //Initial display shows ALL columns
  //NOTE: Downloaded table still shows all columns
  toggleColumns() {
    const button = document.getElementById("columnToggler");

    if(this.isToggled) {
      this.displayedColumns = headersUnusedRemoved;
      button.classList.add("column-toggle");
    }
    else {
      this.displayedColumns = headers;
      button.classList.remove("column-toggle");
    }
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
