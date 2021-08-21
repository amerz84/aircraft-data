import { DataImportService } from './../../services/data-import.service';
import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { DataSharingService } from 'src/app/services/data-sharing.service';

import { DateTimeUtility } from '../../utils/datetime-utils';

@Component({
  selector: 'chart-view',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) baseChart: QueryList<BaseChartDirective>; //Used to assign chart labels
  
  markers: number = 100;              // number of data points for each line in chart
  flightDuration: string;             // length of flight, taken from spreadsheet local time column (HH:MM:SS format)
  chartLabels: Label[] = [];          // labels for CHT and EGT charts (should always be the same)
  chtInfoArray = [];
  egtInfoArray = [];

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
  ///////////////////////////////////////////////////////////////
  
  constructor(private sharingService: DataSharingService, private converter: DateTimeUtility, private importService: DataImportService) {}

  ngOnInit() {   
    this.sharingService.setCHTData();
    this.sharingService.setEGTData();
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

    this.sharingService.chtAverageArray.forEach(element => {
      this.chtInfoArray.push(element);
    });

    this.sharingService.egtAverageArray.forEach(element => {
      this.egtInfoArray.push(element);
    });
  }

  ngAfterViewInit() {
    //Regenerate labels after chart data is present
    this.chartLabels.length = 0;
    this.chartLabels.push(...this.getChartLabels());

    this.baseChart.changes.subscribe(() => {
      for(let child of this.baseChart) {
        child.chart.config.data.labels = this.chartLabels;
        child.chart.update();
      }
    });
  }

  //Take length of markers array (# of plot points for each line) and assign a HH:MM:SS value to each
  // label starting at 00:00:01, with an interval of (record count/markers)
  // Ex) For recordCount == 100 && markers == 10,
  //     labels = [00:00:01, 00:00:10, 00:00:20, ...]
  getChartLabels() {
    const labels: string[] = [];
    for (let i = 0, j = 0; i < this.markers; i++) {
      labels.push(this.converter.toSeconds(j));
      j += Math.floor(this.importService.getRecordCount() / this.markers);
    }
    return labels;
  }

}
