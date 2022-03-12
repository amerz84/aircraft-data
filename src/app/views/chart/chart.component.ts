import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { ChartDataset } from 'chart.js';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import { BaseChartDirective, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { MapDataService } from 'src/app/services/map-data.service';
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
  fuelUsedInGals: number;             // number of gallons of fuel used, taken from the "Fuel Remaining" column
  milesTraveled: number;
  fuelEconomy: number;                // milesTraveled / fuelUsedInGals
  chartLabels: Label[] = [];          // labels for CHT and EGT charts (should always be the same)
  chtAvgValArray;
  chtAbnormalTempArray;
  egtAvgValArray;
  egtAbnormalTempArray;
  fileUploadCount = 0;                // Tracker for new file uploads

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
    private importService: DataImportService, private chartHelperService: ChartHelperService,
    private mapService: MapDataService) {}

  ngOnInit() {   
    // Chart annotation plugin needs to be registered manually
    // see https://www.chartjs.org/chartjs-plugin-annotation/guide/integration.html#script-tag
    Chart.register(annotationPlugin); 

    //Refresh data if new file is uploaded
    this.importService.fileCounter$.subscribe(isNewFile => {
      if (isNewFile > this.fileUploadCount) {
        this.chartDataService.initChartData();
        this.refreshChartData();
        this.fileUploadCount++;
        
      }
    });

    this.importService.getFuelUsed().subscribe(qtyUsed => {
      this.fuelUsedInGals = qtyUsed;
    });

    this.mapService.flightDistance$.subscribe(distance => this.fuelEconomy = (distance / this.fuelUsedInGals));
  }
  
  refreshChartData() {
    this.chtAbnormalTempArray = [];
    this.egtAbnormalTempArray = [];
    this.chtAvgValArray = [];
    this.egtAvgValArray = [];
    this.chtAbnormalTempArray = this.chartDataService.getAbnormalTemperatures("cht");
    this.egtAbnormalTempArray = this.chartDataService.getAbnormalTemperatures("egt");

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
      this.chtAvgValArray.push(element);
    });

    this.chartDataService.egtAverageArray.forEach(element => {
      this.egtAvgValArray.push(element);
    });

    //Regenerate labels after chart data is present
    this.chartLabels.push(...this.getChartLabels());
  }

  ngAfterViewInit() {
    this.baseChart.changes.subscribe(() => {
      for(let child of this.baseChart) {
        child.chart.config.data.labels = this.chartLabels;
        child.chart.update();
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
      j += (this.importService.originalRecordCount / this.markers);
    }
    return labels;
  }

}
