import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { DataImportService } from '../../services/data-import.service';
import { chtHeaders, egtHeaders, headersAll } from '../../utils/column-arrays';
import { TableDataService } from './../../services/table-data.service';

@Component({
  selector: 'table-view',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('isTableLoaded') isTableLoaded$; // Boolean to check if spreadsheet data successfully loaded into table component
  faFileUpload = faFileUpload;  //binding for the Font Awesome file upload icon
  tempSource: MatTableDataSource<String>; //Used to repopulate original/unfiltered file data after clearFilter() called
  timeline: GSAPTimeline;                     //GSAP animation timeline

  //Mat Slide Toggles
  isTimeInfoChecked = false;
  isGeneralChecked = false;
  isGenTempsChecked = false;
  isADCChecked = false;
  isGIAChecked = false;
  isAHRSChecked = false;
  isFuelChecked = false;

  // Mat Table directives //
  dataSource: MatTableDataSource<String>; 
  dummyDataSource: MatTableDataSource<String>; //Null/empty table to display "sticky" header - workaround for Edge/Chrome

  // Paginator variables //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() page: EventEmitter<PageEvent>; //Event for paginator page change
  currentPage: number; //Paginator page index
  
  /////////////////////////////////////////////
  constructor(private importService: DataImportService, private tableDataService: TableDataService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.dataSource =  new MatTableDataSource<String>([]);
    this.tempSource = new MatTableDataSource<String>([]);
    this.dummyDataSource = new MatTableDataSource<String>(null);
    this.isTableLoaded$ = this.tableDataService.isTableLoaded$.subscribe();
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
  onFileDrop(event: DragEvent) {
    //Override browser handler functionality
    event.stopPropagation();
    event.preventDefault();

    this.animatePageElements(); //Start page animation
    this.callFileUploader(event, true);
  }

  //////////////////////////////////////////////////
  // Call on data import service to convert csv file into table data
  callFileUploader(event: DragEvent, isFromDropZone = false) {

    this.importService.onFileChange(event, isFromDropZone).subscribe((data: String[]) => {      
      this.dataSource.data = data;
      this.tempSource.data = data;      

      this.isTableLoaded$ = true; //Lets table info component know that data is present
      this.tableDataService.toggleIsTableLoaded(true);

      this.dataSource.connect();
      this.setInitialToggles(); // Activates "default" toggles
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
    document.getElementById('drop-zone-container').classList.add('isDragover');
  }

  /////////////////////////////////////////////////
  //Remove class when file is dragged away from drop zone
  onDragEnd() {
    document.getElementById('drop-zone-container').classList.remove('isDragover');
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
        if(chtHeaders.includes(key) && parseInt(value.trim()) >= 500) {
          //console.log(`${key} ${value}`);
          matchFilter.push(obj);
          return;
        }
        if(egtHeaders.includes(key) && parseInt(value.trim()) >= 1700) {
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
  toggleColumnDisplay(colType: string) {
      for (let elem of headersAll) {
        if (elem.category.toLowerCase() === colType) {
          elem.hide = !elem.hide;
        }      
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
  //Boolean check for existence of table data
  get isTableLoaded() {
    return this.isTableLoaded$;
  }

  /////////////////////////////////////////////////
  // Call on GSAP timeline to apply animations to dropzone and filters/table elements
  animatePageElements() {
    this.timeline.to("#drop-zone", {duration: 0.5, width: "20vw", height: "15vh"});
    this.timeline.to(".table-container", {duration: 0.5, visibility: "visible"});    
  }
  
  /////////////////////////////////////////////////
  // Display column name in snackbar when td cell is clicked 
  // Redundant workaround for sticky headers bug
  // If sticky headers fixed for mat table, this can be deprecated
  showColumnName(colName: string) {
    const displayedColumn = headersAll.find(col => colName === col.name)
    const message = displayedColumn.name + " (" + displayedColumn.unit + ")";
    this._snackBar.open(message, null, {duration: 1500, panelClass: "column-snackbar"});
  }

  // Return subsection of column headers that are not currently hidden (toggled off)
  getDisplayedColumns(): string[] {
    return headersAll.filter(col => !col.hide).map(col => col.name);    
  }

  setInitialToggles() {
    this.isTimeInfoChecked = true;
    this.isGenTempsChecked = true;
    this.toggleColumnDisplay('timeinfo');
    this.toggleColumnDisplay('generaltemps');
  }
    
}
