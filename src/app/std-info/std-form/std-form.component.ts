import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  getFname:any ="";
  getLname:any="";
  getEmail:any="";
  constructor() { }

  ngOnInit(): void {
  }
   @Output() btnClick = new EventEmitter();

  getStdInfo(){
    
    // this.fname =(<HTMLInputElement>this.getFname).value;
    // this.lname =(<HTMLInputElement>this.getLname).value;
    // this.email=(<HTMLInputElement>this.getEmail).value;
    this.btnClick.emit(
      {
        fname:this.getFname,
        lname:this.getLname,
        email:this.getEmail
      }
    )
    
    
  }

}
