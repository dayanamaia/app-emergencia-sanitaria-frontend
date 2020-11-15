import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  date = new Date();
  dataLineChart = [
    {
      year: '2019',
      data: [2646, 2321, 2370, 2254, 2454, 2486, 2748, 2686, 2576, 2528, 2258, 2312]
    },
    {
      year: '2020',
      data: [2785, 2322, 2643, 2596, 3360, 3685, 3904, 2991]
    }
  ];

  dataChartDetail = [];

  ngOnInit(): void {
    this.percentageByMonth();    
  }

  percentageByMonth() {
    let index = 0;
    let dataFinal = [];

    while(index < this.dataLineChart[0].data[index] && this.dataLineChart[1].data[index]) {
      dataFinal.push({
        yearA: this.dataLineChart[0].year,
        yearB: this.dataLineChart[1].year,
        totalA: this.dataLineChart[0].data[index],
        totalB: this.dataLineChart[1].data[index],
        month: index + 1,
        percentage: ((this.dataLineChart[1].data[index] - this.dataLineChart[0].data[index]) / this.dataLineChart[0].data[index] * 100).toFixed(2),
      });

      index++;
    }

    this.dataChartDetail = dataFinal;
  }

}
