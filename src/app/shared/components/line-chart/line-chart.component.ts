import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  lineChartType: string = "line";
  lineChartLabels: Array<String> = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez",];
  optionData = {
    lineTension: 0.2,
    pointRadius: [4, 4, 4, 4],
    borderWidth: 2,
    pointHoverBorderWidth: 2,
    spanGaps: true
  }

  lineChartData: Array<any> = [
    {
      data: [2646, 2321, 2370, 2254, 2454, 2486, 2748, 2686, 2576, 2528, 2258, 2312],
      label: "2019",
      ...this.optionData
    },
    {
      data: [2785, 2322, 2643, 2596, 3360, 3685, 3904, 2991],
      label: "2020",
      ...this.optionData
    }
  ];

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
      backgroundColor: "transparent",
      borderColor: "#A6CEE3",
      pointBackgroundColor: ["#A6CEE3", "#A6CEE3", "#A6CEE3", "#A6CEE3"],
      pointBorderColor: "#A6CEE3",
      pointHoverBackgroundColor: "#A6CEE3",
      pointHoverBorderColor: "#A6CEE3"
    },
    {
      backgroundColor: "transparent",
      borderColor: "#9E7DF9",
      pointBackgroundColor: ["#9E7DF9", "#9E7DF9", "#9E7DF9", "#9E7DF9"],
      pointBorderColor: "#9E7DF9",
      pointHoverBackgroundColor: "#9E7DF9",
      pointHoverBorderColor: "#9E7DF9"
    }
  ];

}
