import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url="http://localhost:4000/api/bill"

  constructor(private http: HttpClient) {
    console.log(this.getData());
    
  }
    getData(){
     return this.http.get(this.url)
     }
   }
  
   
