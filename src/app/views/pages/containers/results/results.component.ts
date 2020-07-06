import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

interface Cat {
  value: string;
  viewValue: string;
}
interface BarType  {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

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

  cats: Cat[] = [
    {value: 'cat-0', viewValue: 'Категория 1'},
    {value: 'cat-1', viewValue: 'Категория 2'},
    {value: 'cat-2', viewValue: 'Категория 3'},
    {value: 'cat-3', viewValue: 'Категория 4'}
  ];

  barTypes: BarType[] = [
    {value: 'type-0', viewValue: 'Тип 1'},
    {value: 'type-1', viewValue: 'Тип 2'},
    {value: 'type-2', viewValue: 'Тип 3'},
    {value: 'type-3', viewValue: 'Тип 4'}
  ];


  constructor() { }

  ngOnInit() {
  }


}
