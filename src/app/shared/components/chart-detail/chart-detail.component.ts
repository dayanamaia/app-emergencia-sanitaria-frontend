import { IDataChartDetail } from './../../interfaces/dataChartDetail.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css']
})
export class ChartDetailComponent {

  constructor() { }

  @Input()
  data: IDataChartDetail;

  checkPercentage(percentage: string) {
    if(!percentage.includes('-')) {
      return '+';
    }
  }

}
