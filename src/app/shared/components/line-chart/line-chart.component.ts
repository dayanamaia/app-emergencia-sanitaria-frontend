import { Component } from '@angular/core';

interface Stock {
  date: Date;
  value: number;
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  constructor() {
    
  }  

}
