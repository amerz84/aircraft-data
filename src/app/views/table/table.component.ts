import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { gsap } from 'gsap';
import { DataImportService } from '../../services/data-import.service';
import { headersAll } from '../../utils/column-arrays';
import { TableDataService } from './../../services/table-data.service';

@Component({
  selector: 'table-view',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('isTableLoaded') isTableLoaded$; //Boolean to check if spreadsheet data successfully loaded into table component
  tempSource: MatTableDataSource<String>; //Used to repopulate original/unfiltered file data after clearFilter() called
  timeline: GSAPTimeline;                 //GSAP animation timeline
  isFileLoading: boolean;                 //Tracks file loading status for spinner display
  isFileLoaded: boolean;

  //Mat Slide Toggles
  isTimeInfoChecked = false;
  isGeneralChecked = false;
  isGenTempsChecked = false;
  isADCChecked = false;
  isGIAChecked = false;
  isAHRSChecked = false;
  isFuelChecked = false;

  // Mat Table //
  @ViewChild(MatTable) table: MatTable<any>;
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
    this.isFileLoading = false;
  }

  /////////////////////////////////////////////////
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /////////////////////////////////////////////////
  //Start demo
  onFileSelect() {    
    this.isFileLoading = true;
    //Listen for changes to loaded file data and populate table with data from dataSource
    this.callFileUploader();      
  }

  //////////////////////////////////////////////////
  // Call on data import service to convert csv file into table data
  callFileUploader() {
    this.importService.onFileChange().subscribe((data: String[]) => {    
      this.dataSource.data = data;
      this.tempSource.data = data;
      this.isFileLoading = false;
      this.isFileLoaded = true;
      this.animateTableLoad(); //Start page animation

      if (this.isTableLoaded$ !== true) {         
        this.tableDataService.toggleIsTableLoaded(true);
        this.setInitialToggles(); // Activates "default" toggles        
      } 
    }, error => {
      this._snackBar.open("Upload failed --- " + error.message, "OK", {panelClass: "column-snackbar"});
      return;
    });

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
  // Call on GSAP timeline to apply animations to file upload container and table elements
  animateTableLoad() {
    this.timeline.to(".file-upload-container", { duration: 0, display: "none" });
    this.timeline.to(".table-container", { duration: 0.6, visibility: "visible", opacity: 1 });        
  }
  
  /////////////////////////////////////////////////
  // Display column name and measurement unit in snackbar when td cell is clicked 
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
