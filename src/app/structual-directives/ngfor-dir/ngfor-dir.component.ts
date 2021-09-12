import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-dir',
  templateUrl: './ngfor-dir.component.html',
  styleUrls: ['./ngfor-dir.component.scss']
})
export class NgforDirComponent implements OnInit {
  skills:string[] =["HTML","CSS","JavaScript","Typesrcipt","Angular"]
  constructor() { }

  ngOnInit(): void {
  }

}
