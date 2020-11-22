import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDataMortality } from './../shared/interfaces/dataMortality.interface';

@Injectable({
  providedIn: 'root'
})
export class DataMortalityService {

  constructor(private http: HttpClient) { }

  urlDataState = 'https://run.mocky.io/v3/1406c42a-8629-4ddc-9a6e-a7213445d56b';

  getDataMortality(): Observable<IDataMortality[]> {
    return this.http.get<IDataMortality[]>(this.urlDataState);
  }
}
