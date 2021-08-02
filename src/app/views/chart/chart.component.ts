import { DateTimeConversion } from './../../utils/datetime-conversions';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'chart-view',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chtDataset: any[];
  lineChartData: ChartDataSets[];
  isDataAvailable: boolean = false;

  lineChartLabels = [];

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

    for (let i = 0; i < this.sharingService.getCHTVals()[0].length; i++) {
      this.lineChartLabels.push(this.converter.toSeconds(i + 1));
      console.log(this.lineChartLabels[i]);
    }

    this.lineChartData = [
      { data: this.sharingService.getCHTVals()[0], label: 'CHT 1' },
      { data: this.sharingService.getCHTVals()[1], label: 'CHT 2' },
      { data: this.sharingService.getCHTVals()[2], label: 'CHT 3' },
      { data: this.sharingService.getCHTVals()[3], label: 'CHT 4' },
      { data: this.sharingService.getCHTVals()[4], label: 'CHT 5' },
      { data: this.sharingService.getCHTVals()[5], label: 'CHT 6' },
    ];

    this.isDataAvailable = true;
  }

  ngOnInit(): void {    
  }

}
