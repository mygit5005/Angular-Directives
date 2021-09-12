import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  heading:string ="property binding"
  imgUrl:string ="../../assets/jerry.jpg";
  userName:string="Shekhar"
  colspanValue:any =2
  constructor() { }

  ngOnInit(): void {
  }

}
