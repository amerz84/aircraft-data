import { avionicsHeaders } from './../shared/column-arrays';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { headersAll, engineHeaders, egtHeaders, chtHeaders } from '../shared/column-arrays';
import { Person } from '../shared/person';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'data-table',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  headerValues = []; //Placeholder to determine displayed column list
  isToggled: boolean; // Check for "toggle" status of columns displayed. False = columns not hidden, True = columns hidden
  _isTableLoaded: boolean; // Check for data loaded into HTML table from spreadsheet
  faFileUpload = faFileUpload; //binding for the file upload icon
  tempSource: MatTableDataSource<Person>; //Used to repopulate original/unfiltered file data after clearFilter() called

  // Mat Table directives //
  dataSource: MatTableDataSource<Person>; 
  displayedColumns: string[] = headersAll; //Table headers (first row), initiated to full column list
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /////////////////////////////////////////////
  // Paginator variables //
  @Output() page: EventEmitter<PageEvent>; //Event for paginator page change
  currentPage: number; //Paginator page index

  /////////////////////////////////////////////
  constructor(private uploadService: DataService, private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource<Person>([]);
    this.tempSource = new MatTableDataSource<Person>([]);
    this._isTableLoaded = false;
    this.isToggled = false;
    this.page = new EventEmitter();
    this.currentPage = 0;
  }

  /////////////////////////////////////////////////
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /////////////////////////////////////////////////
  //Call on data-upload service to load file into table
  refreshTableData(event: any) {
    //Listen for changes to loaded file data and populate table with data from dataSource
    this.uploadService.onFileChange(event).subscribe((data: Person[]) => {      
      this.dataSource.data = data;
      this.tempSource.data = data;      
      this.dataSource.connect();
      this._isTableLoaded = true;
    });
  }

  /////////////////////////////////////////////////
  //If paginator index has changed, reset the vertical scroll to position 0
  resetTableScroll(event: PageEvent) {
    if (event.pageIndex != this.currentPage) {
      const table = document.getElementById('csv-table');
      table.scrollTop = 0;
      this.currentPage = event.pageIndex;
    }
  }

  /////////////////////////////////////////////////
  //Display column name in snackbar when td cell is clicked
  showColumnName(colName: string) {
    this._snackBar.open(colName, null, {duration: 1500, panelClass: "column-snackbar"});
  }

  /////////////////////////////////////////////////
  //Handle file drop onto drop zone
  onDrop(event: any) {
    //Override browser handler functionality
    event.stopPropagation();
    event.preventDefault();

    this.uploadService.onFileChange(event, true).subscribe((data: Person[]) => {      
      this.dataSource.data = data;
      this.tempSource.data = data;      
      this.dataSource.connect();
      this._isTableLoaded = true;
    });
  }

  /////////////////////////////////////////////////
  //Add class when file is dragged over drop zone 
  onDragOver(event: any) {
    event.stopPropagation();
    event.preventDefault();
    document.getElementById('drop_zone').classList.add('isDragover');
  }

  /////////////////////////////////////////////////
  //Remove class when file is dragged away from drop zone
  onDragEnd() {
    document.getElementById('drop_zone').classList.remove('isDragover');
  }

  /////////////////////////////////////////////////
  //Show only rows where GPSFix col IN [3D, 3DDiff]
  applyGPSFilter() {
    this.clearFilter();
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

  /////////////////////////////////////////////////
  //Show only rows with high(read: outside of normal operating parameters) EGT or CHT values
  applyHighEgtOrChtFilter() {
    const matchFilter = [];
    
    this.dataSource.data.forEach(obj => {
      for (const [key, value] of Object.entries(obj)) {
        if(chtHeaders.includes(key) && parseInt(value.trim()) >= 400) {
          //console.log(`${key} ${value}`);
          matchFilter.push(obj);
          return;
        }
        if(egtHeaders.includes(key) && parseInt(value.trim()) >= 1100) {
          //console.log(`${key} ${value}`);
          matchFilter.push(obj);
          return;
        }
      }      
    });
    this.dataSource.data = matchFilter;
  }

  /////////////////////////////////////////////////
  //Clear all table filters and display original data
  clearFilter() {
    this.dataSource.data = this.tempSource.data;
  }

  /////////////////////////////////////////////////
  //Toggle display of unimportant columns. Boolean is toggled in onClick method in html file
  //Initial display shows ALL columns
  //NOTE: Downloaded table still shows all columns
  toggleColumnDisplay(eventValue?: string) {
    const button = document.getElementById("columnToggler");

    if(eventValue == "engine") {
      this.displayedColumns = engineHeaders;
      button.classList.add("column-toggle");
    }
    else if (eventValue == "avionics") {
      this.displayedColumns = avionicsHeaders;
      button.classList.remove("column-toggle");
    }
    else {
      this.displayedColumns = headersAll;
    }
  }

  /////////////////////////////////////////////////
  //Save file
  downloadTableAsCSV(table_id: string) {
    this.uploadService.saveFile(table_id);
  }

  /////////////////////////////////////////////////
  //Boolean check for existence of table data
  get isTableLoaded() {
    return this._isTableLoaded;
  }
}
