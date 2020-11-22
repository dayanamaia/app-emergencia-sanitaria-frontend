import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/shared/interfaces/data.interface';

import { IDataMortality } from 'src/app/shared/interfaces/dataMortality.interface';
import { DataMortalityService } from './../../services/data-mortality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataMortalityService: DataMortalityService) { }

  date = new Date();
  dataMortality: IDataMortality[] = [];
  dataLineChart: IData[];
  dataChartDetail = [];

  ngOnInit(): void {
    this.setDataChartDetail();
  }

  setDataChartDetail() {
    this.dataMortalityService.getDataMortality().subscribe((data: IDataMortality[]) => {
      const dataYearC = data.filter(item => item.Ano === 2018).map(item => item.Total);
      const dataYearA = data.filter(item => item.Ano === 2019).map(item => item.Total);
      const dataYearB = data.filter(item => item.Ano === 2020).map(item => item.Total);

      this.dataLineChart = [
        {
          year: '2018',
          label: '2018',
          data: dataYearC
        },
        {
          year: '2019',
          label: '2019',
          data: dataYearA
        },
        {
          year: '2020',
          label: '2020',
          data: dataYearB
        }
      ];

      this.percentageByMonth();
    });
  }

  percentageByMonth() {
    let index = 0;
    let dataFinal = [];

    while(
      index < this.dataLineChart[1].data[index] && 
      this.dataLineChart[2].data[index]) {

      dataFinal.push({
        yearA: this.dataLineChart[1].year,
        yearB: this.dataLineChart[2].year,
        totalA: this.dataLineChart[1].data[index],
        totalB: this.dataLineChart[2].data[index],
        month: index + 1,
        percentage: ((this.dataLineChart[2].data[index] - this.dataLineChart[1].data[index]) / this.dataLineChart[1].data[index] * 100).toFixed(2),
      });

      index++;
    }

    this.dataChartDetail = dataFinal;
  }

}
