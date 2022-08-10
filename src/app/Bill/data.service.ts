import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }

   getData(){
    this.http.get<Data[]>("http://localhost:4000/api/bill")
   }
}
