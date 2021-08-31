import { Injectable } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class ChartHelperService {
      ///////////////////// CHT Chart ////////////////////////////
      public CHTChartOptions: (ChartOptions) = {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          },
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yMin: 500,
                yMax: 500,
                borderColor: 'red',
                borderWidth: 2,
                label: {
                  enabled: true,
                  color: 'red',
                  content: 'Max Safe Temp'
                }
              }
            }
          }
        },
        scales: {
          x: 
            {
              ticks: { color: 'white' },
              grid: { color: 'rgba(255,255,255,0.1)' }
            },
          y:
            {
              ticks: { color: 'white' },
              grid: { color: 'rgba(255,255,255,0.1)' }
          },
        },
      };
    public CHTChartColors: Color[] = [
      {
        borderColor: '#ffcc00',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#007FFF',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#ffe066',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#66b3ff',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#fff0b3',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#b3d9ff',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
    ];
    public CHTChartLegend = true;
    public CHTChartType = 'line';

    ///////////////////// EGT Chart ////////////////////////////
    public EGTChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          },
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yMin: 1500,
                yMax: 1500,
                borderColor: 'red',
                borderWidth: 2,
                label: {
                  enabled: true,
                  color: 'red',
                  content: 'Max Safe Temp'
                }
              }
            }
          }
        },
        scales: {
          x: 
            {
              ticks: { color: 'white' },
              grid: { color: 'rgba(255,255,255,0.1)' }
            },
          y:
            {
              ticks: { color: 'white' },
              grid: { color: 'rgba(255,255,255,0.1)' }
          },
        },
      };
    public EGTChartColors: Color[] = [
      {
        borderColor: '#ffcc00',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#007FFF',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#ffe066',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#66b3ff',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#fff0b3',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
        borderColor: '#b3d9ff',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
    ];
    public EGTChartLegend = true;
    public EGTChartType = 'line';

}
