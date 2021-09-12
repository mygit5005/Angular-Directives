import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-deco',
  templateUrl: './input-deco.component.html',
  styleUrls: ['./input-deco.component.scss']
})
export class InputDecoComponent implements OnInit {
@Input() msg:string ="";
@Output() childEvent = new EventEmitter();
msgParent:string="Hello parent component how are you?"  
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    console.log("Event Triggered")
    this.childEvent.emit(this.msgParent)
  }

}
