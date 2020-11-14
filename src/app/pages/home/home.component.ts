import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
  ]

}
