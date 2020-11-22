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
      const dataYearA = data.filter(item => item.Ano === 2019).map(item => item.Total);
      const dataYearB = data.filter(item => item.Ano === 2020).map(item => item.Total);

      this.dataLineChart = [
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
      index < this.dataLineChart[0].data[index] && 
      this.dataLineChart[1].data[index]) {

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
