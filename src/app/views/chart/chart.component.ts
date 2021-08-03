import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { DataSharingService } from 'src/app/services/data-sharing.service';

import { DateTimeConversion } from './../../utils/datetime-conversions';

@Component({
  selector: 'chart-view',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chtChart: BaseChartDirective;
  chtDataset: any[];
  lineChartData: ChartDataSets[];
  isDataAvailable: boolean = false;

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
  
  constructor(private sharingService: DataSharingService, private converter: DateTimeConversion) {
    this.lineChartData = [
      { data: this.sharingService.getCHTVals()[0], label: 'CHT 1' },
      { data: this.sharingService.getCHTVals()[1], label: 'CHT 2' },
      { data: this.sharingService.getCHTVals()[2], label: 'CHT 3' },
      { data: this.sharingService.getCHTVals()[3], label: 'CHT 4' },
      { data: this.sharingService.getCHTVals()[4], label: 'CHT 5' },
      { data: this.sharingService.getCHTVals()[5], label: 'CHT 6' },
    ];
    this.lineChartLabels.length = 0;
    this.lineChartLabels.push(...this.getLabels());

    setTimeout(() => {
      if (this.chtChart && this.chtChart.chart && this.chtChart.chart.config) {
        this.chtChart.chart.config.data.labels = this.lineChartLabels;
        this.chtChart.chart.update();
      }
    }, 50);
  }

  ngOnInit(): void {   




    this.isDataAvailable = true; 
  }

  getLabels() {
    const labels: string[] = [];
    for (let i = 0; i < this.sharingService.getCHTVals()[0].length; i++) {
      labels.push(this.converter.toSeconds(i + 1));
    }
    return labels;
  }

}
