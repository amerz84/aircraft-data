import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { ChartDataset } from 'chart.js';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import { BaseChartDirective, Label } from 'ng2-charts';
import { DateTimeUtility } from '../../utils/datetime-utils';
import { ChartDataService } from './../../services/chart-data.service';
import { DataImportService } from './../../services/data-import.service';
import { ChartHelperService } from './chart-helper-service';

@Component({
  selector: 'chart-view',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) baseChart: QueryList<BaseChartDirective> = new QueryList<BaseChartDirective>(); //Used to assign chart labels
  
  markers: number = 100;              // number of data points for each line in chart
  flightDuration: string;             // length of flight, taken from spreadsheet local time column (HH:MM:SS format)
  chartLabels: Label[] = [];          // labels for CHT and EGT charts (should always be the same)
  chtInfoArray = [];
  egtInfoArray = [];

  // CHT data chart props
  CHTChartData: ChartDataset[];
  CHTChartOptions = this.chartHelperService.CHTChartOptions;
  CHTChartColors = this.chartHelperService.CHTChartColors;
  CHTChartLegend = this.chartHelperService.CHTChartLegend;
  CHTChartPlugins = this.chartHelperService.CHTChartOptions.plugins;
  CHTChartType = this.chartHelperService.CHTChartType;
  /////////////////////////////////////////////////////////////////

  // EGT data chart props
  EGTChartData: ChartDataset[];
  EGTChartOptions = this.chartHelperService.EGTChartOptions;
  EGTChartColors = this.chartHelperService.EGTChartColors;
  EGTChartLegend = this.chartHelperService.EGTChartLegend;
  EGTChartPlugins = this.chartHelperService.EGTChartOptions.plugins;
  EGTChartType = this.chartHelperService.EGTChartType;
  ///////////////////////////////////////////////////////////////
  
  constructor(private chartDataService: ChartDataService, private converter: DateTimeUtility, 
    private importService: DataImportService, private chartHelperService: ChartHelperService) {
      
    }

  ngOnInit() {   
    // Chart annotation plugin needs to be registered manually
    // see https://www.chartjs.org/chartjs-plugin-annotation/guide/integration.html#script-tag
    Chart.register(annotationPlugin);
    this.chartDataService.initChartData();
    this.test();

    this.flightDuration = this.converter.getTimeDiff(this.importService.flightTimesArray);
    this.CHTChartData = [
      { data: this.chartDataService.getCHTVals(this.markers)[0], label: 'CHT 1', xAxisID: 'x', yAxisID: 'y'},
      { data: this.chartDataService.getCHTVals(this.markers)[1], label: 'CHT 2', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getCHTVals(this.markers)[2], label: 'CHT 3', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getCHTVals(this.markers)[3], label: 'CHT 4', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getCHTVals(this.markers)[4], label: 'CHT 5', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getCHTVals(this.markers)[5], label: 'CHT 6', xAxisID: 'x', yAxisID: 'y' },
    ];
    this.EGTChartData = [
      { data: this.chartDataService.getEGTVals(this.markers)[0], label: 'EGT 1', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getEGTVals(this.markers)[1], label: 'EGT 2', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getEGTVals(this.markers)[2], label: 'EGT 3', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getEGTVals(this.markers)[3], label: 'EGT 4', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getEGTVals(this.markers)[4], label: 'EGT 5', xAxisID: 'x', yAxisID: 'y' },
      { data: this.chartDataService.getEGTVals(this.markers)[5], label: 'EGT 6', xAxisID: 'x', yAxisID: 'y' },
    ];

    this.chartDataService.chtAverageArray.forEach(element => {
      this.chtInfoArray.push(element);
    });

    this.chartDataService.egtAverageArray.forEach(element => {
      this.egtInfoArray.push(element);
    });
  
  }

  ngAfterViewInit() {
    //Regenerate labels after chart data is present
    this.chartLabels.push(...this.getChartLabels());

    this.baseChart.changes.subscribe(() => {
      for(let child of this.baseChart) {
        child.chart.config.data.labels = this.chartLabels;
        child.chart.render();
      }
    });  

  }

  /** Take length of markers array (# of plot points for each line) and assign a HH:MM:SS value to each
   label starting at 00:00:01, with an interval of (record count/markers).
   
   Ex) For (recordCount = 100, markers = 10)
   
   labels = [00:00:01, 00:00:10, 00:00:20, ...] */
  getChartLabels() {
    const labels: string[] = [];
    for (let i = 0, j = 0; i < this.markers; i++) {
      labels.push(this.converter.toSeconds(j));
      j += Math.floor(this.importService.originalRecordCount / this.markers);
    }
    return labels;
  }

  test() {

    console.log(this.chartDataService.chtValuesArray[0]);
    for(let currElement = 0; currElement < this.chartDataService.chtValuesArray[0].length; currElement++) {

      let sum = 0 + parseInt(this.chartDataService.chtValuesArray[0][currElement]);     


      //Find moving average of first 10 elements
      if (currElement < 10) {
        let avg = 0;
        let numIterations = 0;

        for(let j =0; j < 10; j++) {
          sum += parseInt(this.chartDataService.chtValuesArray[0][currElement + j + 1]);
          numIterations++;
        }
        avg = sum / (numIterations + 1);
        if (parseInt(this.chartDataService.chtValuesArray[0][currElement]) > (1.25 * avg) || parseInt(this.chartDataService.chtValuesArray[0][currElement]) < (0.75 * avg)) {
          console.log(currElement);
        }
      }

      //Find moving average of inner elements
      if (currElement >= 10 && currElement < this.chartDataService.chtValuesArray[0].length - 10) {
        let avg = 0;
        let numIterations = 0;

        for (let j = 0; j < 10; j++) {
          sum += parseInt(this.chartDataService.chtValuesArray[0][currElement + j + 1]) + parseInt(this.chartDataService.chtValuesArray[0][currElement- Math.abs(j-currElement)]);
          numIterations++;
        }
        avg = sum / ((numIterations * 2) + 1);
        if (parseInt(this.chartDataService.chtValuesArray[0][currElement]) > (1.25 * avg) || parseInt(this.chartDataService.chtValuesArray[0][currElement]) < (0.75 * avg)) {
          console.log(currElement);
        }
      }
      
      //Find moving average of last 10 elements
      if (currElement >= this.chartDataService.chtValuesArray[0].length - 10) {
        let avg = 0;
        let numIterations = 0;

        for(let j = this.chartDataService.chtValuesArray[0].length - 1; j > this.chartDataService.chtValuesArray[0].length - 11; j--) {
          sum += parseInt(this.chartDataService.chtValuesArray[0][j]) + parseInt(this.chartDataService.chtValuesArray[0][currElement-(j-currElement)]);
          numIterations++;
          
        }
        avg = sum / ((numIterations * 2) + 1);
        if (parseInt(this.chartDataService.chtValuesArray[0][currElement]) > (1.25 * avg) || parseInt(this.chartDataService.chtValuesArray[0][currElement]) < (0.75 * avg)) {
          console.log(currElement);
        }
      }
      sum = 0;
    }
  }

}
