import { DataImportService } from './../../services/data-import.service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild(BaseChartDirective) chtChart: BaseChartDirective;
  chtDataset: any[];
  lineChartData: ChartDataSets[];
  markers: number = 100;              // number of data points for each line in chart
  recordCount: number;                // number of rows of original spreadsheet
  isDataAvailable: boolean = false;
  flightDuration;

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  constructor(private sharingService: DataSharingService, private converter: DateTimeConversion, private importService: DataImportService) {
    this.sharingService.setCHTData();
    this.sharingService.setEGTData();
    this.recordCount = this.importService.originalRecordCount;
    this.flightDuration = this.converter.getTimeDiff(this.importService.getFlightTimes());
    this.lineChartData = [
      { data: this.sharingService.getCHTVals(this.markers)[0], label: 'CHT 1' },
      { data: this.sharingService.getCHTVals(this.markers)[1], label: 'CHT 2' },
      { data: this.sharingService.getCHTVals(this.markers)[2], label: 'CHT 3' },
      { data: this.sharingService.getCHTVals(this.markers)[3], label: 'CHT 4' },
      { data: this.sharingService.getCHTVals(this.markers)[4], label: 'CHT 5' },
      { data: this.sharingService.getCHTVals(this.markers)[5], label: 'CHT 6' },
    ];
    this.lineChartLabels.length = 0;
    this.lineChartLabels.push(...this.getLabels());

    //Issue with Angular change detection and Chart initialization
    //Wrapping chart label assignment and update() in a callback will ensure
    //Labels are generated after chart data is present
    setTimeout(() => {
      if (this.chtChart && this.chtChart.chart && this.chtChart.chart.config) {
        this.chtChart.chart.config.data.labels = this.lineChartLabels;
        this.chtChart.chart.update();
      }
    }, 50);

    
  }

  ngOnInit() {   
    this.isDataAvailable = true; 
  }

  //Take length of markers array (# of plot points for each line) and assign a new HH:MM:SS value to each
  // marker starting at 00:00:01
  getLabels() {
    const labels: string[] = [];
    for (let i = 0; i < this.recordCount;) {
      labels.push(this.converter.toSeconds(i));
      i += Math.floor(this.recordCount / this.markers);
    }
    return labels;
  }

}
