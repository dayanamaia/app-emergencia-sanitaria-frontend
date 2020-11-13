import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css']
})
export class ChartDetailComponent {

  constructor() { }

  @Input()
  percentage: string = '29.6';

  @Input()
  total: string = '2780';

}
