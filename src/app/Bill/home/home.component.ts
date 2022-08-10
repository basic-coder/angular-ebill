import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData:any;
  constructor(private ds:DataService) { 

  
    ds.getData().subscribe((res:any)=>{
      console.log("res",res);
      
      this.allData = res;
    })
  }

  

  ngOnInit(){
  }

  // get(){
  //   this.ds.getData().subscribe((res:any)=>{
  //     console.log("res",res);
      
  // //     this.allData = res;
  //   })
  // }

}
