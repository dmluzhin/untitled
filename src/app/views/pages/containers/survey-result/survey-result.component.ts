import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit {
  public progress1: number = 74;
  public progress2: number = 26;
  public progress3: number = 55;
  public progress4: number = 32;
  public progress5: number = 13;
  public progress6: number = 55;
  public progress7: number = 42;
  public progress8: number = 3;

  constructor() { }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
      fullWidth: false,
      labels: {
        fontSize: 10,
        fontColor: '#000000',
        fontStyle: 'bold',
        boxWidth: 10
      }
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Предпочитают иномарки'], ['Предпочитают российский автопром'], ['Затрудняются ответить']];
  public pieChartData: any[] = [27, 50, 23];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['#FFC800', '#1F8CCC', '#FF4D4D'],
    },
  ];

  ngOnInit() {
  }

}
