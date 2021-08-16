import { DataImportService } from './../../services/data-import.service';
import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { DataSharingService } from 'src/app/services/data-sharing.service';

import { DateTimeConversion } from '../../utils/datetime-utils';

@Component({
  selector: 'chart-view',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) baseChart: QueryList<BaseChartDirective>;
  
  markers: number = 100;              // number of data points for each line in chart
  recordCount: number;                // number of rows of original spreadsheet
  isDataAvailable: boolean = false;
  flightDuration;
  chartLabels: Label[] = [];

  // CHT data chart props
  CHTChartData: ChartDataSets[];
  CHTChartOptions = {
    responsive: true,
  };
  CHTChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  CHTChartLegend = true;
  CHTChartPlugins = [];
  CHTChartType = 'line';

  // EGT data chart props
  EGTChartData: ChartDataSets[];
  EGTChartOptions = {
    responsive: true,
  };
  EGTChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  EGTChartLegend = true;
  EGTChartPlugins = [];
  EGTChartType = 'line';
  
  constructor(private sharingService: DataSharingService, private converter: DateTimeConversion, private importService: DataImportService) {


    
  }

  ngOnInit() {   
    this.isDataAvailable = true; 
    this.sharingService.setCHTData();
    this.sharingService.setEGTData();
    this.recordCount = this.importService.originalRecordCount;
    this.flightDuration = this.converter.getTimeDiff(this.importService.getFlightTimes());
    this.CHTChartData = [
      { data: this.sharingService.getCHTVals(this.markers)[0], label: 'CHT 1' },
      { data: this.sharingService.getCHTVals(this.markers)[1], label: 'CHT 2' },
      { data: this.sharingService.getCHTVals(this.markers)[2], label: 'CHT 3' },
      { data: this.sharingService.getCHTVals(this.markers)[3], label: 'CHT 4' },
      { data: this.sharingService.getCHTVals(this.markers)[4], label: 'CHT 5' },
      { data: this.sharingService.getCHTVals(this.markers)[5], label: 'CHT 6' },
    ];
    this.EGTChartData = [
      { data: this.sharingService.getEGTVals(this.markers)[0], label: 'EGT 1' },
      { data: this.sharingService.getEGTVals(this.markers)[1], label: 'EGT 2' },
      { data: this.sharingService.getEGTVals(this.markers)[2], label: 'EGT 3' },
      { data: this.sharingService.getEGTVals(this.markers)[3], label: 'EGT 4' },
      { data: this.sharingService.getEGTVals(this.markers)[4], label: 'EGT 5' },
      { data: this.sharingService.getEGTVals(this.markers)[5], label: 'EGT 6' },
    ];
  }

  ngAfterViewInit() {
    this.chartLabels.length = 0;
    this.chartLabels.push(...this.getLabels());

    //Issue with Angular change detection and Chart initialization
    //Wrapping chart label assignment and update() in a callback will ensure
    //Labels are generated after chart data is present
    this.baseChart.changes.subscribe(() => {
      for(let child of this.baseChart) {
        child.chart.config.data.labels = this.chartLabels;
        child.chart.update();
      }
    });
/*     setTimeout(() => {
      for(let child of this.baseChart) {
        child.chart.config.data.labels = this.chartLabels;
        child.chart.update();
      }      
    }, 50); */
  }

  //Take length of markers array (# of plot points for each line) and assign a new HH:MM:SS value to each
  // marker starting at 00:00:01
  getLabels() {
    const labels: string[] = [];
    for (let i = 0, j = 0; i < this.markers; i++) {
      labels.push(this.converter.toSeconds(j));
      j += Math.floor(this.recordCount / this.markers);
    }
    return labels;
  }

}
