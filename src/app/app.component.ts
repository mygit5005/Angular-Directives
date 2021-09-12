import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msgForChild:string ="Abhijeet server"
  title = 'Abhijeet';
  fname ='Udawant'
  onChildTriggered(event:any){
    console.log(event)
    this.msgForChild = event;
  }
}
