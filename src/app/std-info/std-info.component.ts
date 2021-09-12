import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-std-info',
  templateUrl: './std-info.component.html',
  styleUrls: ['./std-info.component.scss']
})
export class StdInfoComponent implements OnInit {
  // getFname:any;
  // getLname:any;
  // getEmail:any;
  // fname:any;
  // lname:any;
  // email:any;
 
  constructor() { }

  ngOnInit(): void {
    // this.getFname=document.getElementById("fname");
    // this.getLname=document.getElementById("lname");
    // this.getEmail=document.getElementById("email");
  }
  newArray:any[]=[];

  getStdForm(event:any){
    console.log(event)
    this.newArray.push(event);
    console.log(this.newArray)
  }
  

}
