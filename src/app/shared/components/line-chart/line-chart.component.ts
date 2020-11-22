import { Component, Input } from '@angular/core';

import { IData } from './../../interfaces/data.interface';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  lineChartType: string = "line";
  lineChartLabels: Array<String> = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

  @Input()
  data: IData[] = [];

  lineChartOptions: any = {
    responsive: true,
    layout: {
      padding: {
        top: 10
      }
    },
    tooltips: {
      enabled: true
    },
    elements: {
      rectangle: {
        borderWidth: 0
      }
    },
    scales: {
      yAxes: [
        {
          display: true,
          gridLines: {
            display: true,
            drawBorder: true,
            lineWidth: 1
          },
          ticks: {
            min: 0
          }
        }
      ]
    }
  };

  lineChartColors: Array<any> = [
    {
      backgroundColor: "#A6CEE3a4",
      borderColor: "#A6CEE3",
      pointBackgroundColor: ["#4aace0", "#4aace0", "#4aace0", "#4aace0"],
      pointBorderColor: "#4aace0",
      pointHoverBackgroundColor: "#4aace0",
      pointHoverBorderColor: "#4aace0"
    },
    {
      backgroundColor: "#9E7DF9a4",
      borderColor: "#9E7DF9",
      pointBackgroundColor: ["#9E7DF9", "#9E7DF9", "#9E7DF9", "#9E7DF9"],
      pointBorderColor: "#9E7DF9",
      pointHoverBackgroundColor: "#9E7DF9",
      pointHoverBorderColor: "#9E7DF9"
    }
  ];

}
