import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { DataImportService } from '../../services/data-import.service';
import { avionicsHeaders, chtHeaders, egtHeaders, engineHeaders, headersAll } from '../../utils/column-arrays';



@Component({
  selector: 'table-view',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('isTableLoaded') _isTableLoaded: boolean; // True if spreadsheet data successfully loaded into table component
  headerValues = [];            //Placeholder to determine displayed column list
  isToggled: boolean;           // Check for "toggle" status of columns displayed. False = columns not hidden, True = columns hidden

  faFileUpload = faFileUpload;  //binding for the Font Awesome file upload icon
  tempSource: MatTableDataSource<String>; //Used to repopulate original/unfiltered file data after clearFilter() called
  timeline;                     //GSAP animation timeline

  // Mat Table directives //
  dataSource: MatTableDataSource<String>; 
  dummyDataSource: MatTableDataSource<String>; //Null/empty table to display "sticky" header - workaround for Edge/Chrome
  displayedColumns: string[] = headersAll; //Table headers (first row), initiated to full column list

  // Paginator variables //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() page: EventEmitter<PageEvent>; //Event for paginator page change
  currentPage: number; //Paginator page index
  

  /////////////////////////////////////////////
  constructor(private importService: DataImportService, private _snackBar: MatSnackBar, private sharingService: DataSharingService) {}

  ngOnInit() {
    this.dataSource =  new MatTableDataSource<String>([]);
    this.tempSource = new MatTableDataSource<String>([]);
    this.dummyDataSource = new MatTableDataSource<String>(null);
    this._isTableLoaded = false;
    this.isToggled = false;
    this.page = new EventEmitter();
    this.currentPage = 0;
    this.timeline = gsap.timeline();
  }
  /////////////////////////////////////////////////
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /////////////////////////////////////////////////
  //Call on file upload through use of the drop area browse button
  onFileSelect(event: any) {    
    //Listen for changes to loaded file data and populate table with data from dataSource
    this.callFileUploader(event);  
    this.animatePageElements(); //Start page animation 
  }

  /////////////////////////////////////////////////
  // through use of the drop zone (drag and drop)
  onFileDrop(event: any) {
    //Override browser handler functionality
    event.stopPropagation();
    event.preventDefault();

    this.animatePageElements(); //Start page animation
    this.callFileUploader(event, true);
  }

  //////////////////////////////////////////////////
  // Call on data import service to convert csv file into table data
  callFileUploader(event: any, isFromDropZone = false) {
    this.importService.onFileChange(event, isFromDropZone).subscribe((data: String[]) => {      
      this.dataSource.data = data;
      this.tempSource.data = data;      

      this._isTableLoaded = true;
      this.sharingService.toggleIsTableLoaded(this._isTableLoaded);

      this.dataSource.connect();
    }, error => {
      this._snackBar.open("Upload failed --- " + error.message, "OK", {panelClass: "column-snackbar"});
      return;
    });

  }

  /////////////////////////////////////////////////
  //Add class when file is dragged over drop zone 
  onDragOver(event: any) {
    event.stopPropagation();
    event.preventDefault();
    document.getElementById('drop-zone-initial').classList.add('isDragover');
  }

  /////////////////////////////////////////////////
  //Remove class when file is dragged away from drop zone
  onDragEnd() {
    document.getElementById('drop-zone-initial').classList.remove('isDragover');
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
  //Toggle display of undesired columns. Boolean is toggled in onClick method in html file
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
  //If paginator index has changed, reset the vertical scroll to position 0
  resetTableScrollPosition(event: PageEvent) {
    if (event.pageIndex != this.currentPage) {
      const table = document.getElementById('csv-table');
      table.scrollTop = 0;
      this.currentPage = event.pageIndex;
    }
  }

  /////////////////////////////////////////////////
  //Save file
/*   downloadTableAsCSV(table_id: string) {
    this.importService.saveFile(table_id);
  } */

  /////////////////////////////////////////////////
  //Boolean check for existence of table data
  get isTableLoaded() {
    return this._isTableLoaded;
  }

  /////////////////////////////////////////////////
  // Call on GSAP timeline to apply animations to dropzone and filters/table elements
  animatePageElements() {
    this.timeline.to("#drop-zone-initial", {duration: 0.5, width: "20vw", height: "15vh"});
    this.timeline.to("#button-table-container", {duration: 0.5, visibility: "visible"});    
  }
  
  /////////////////////////////////////////////////
  // Display column name in snackbar when td cell is clicked 
  // Redundant workaround for sticky headers bug
  // If sticky headers fixed for mat table, this can be deprecated
  showColumnName(colName: string) {
    this._snackBar.open(colName, null, {duration: 1500, panelClass: "column-snackbar"});
  }
    
}
