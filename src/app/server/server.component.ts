import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    // styleUrls:['.server.component.scss']
    styles:[`
    p{
        color:blueviolet;
    }
    .white{
        color : white;
    }`] 
})
export class ServerComponent{
    serverId:number=10;
    msgFromServer:string="new message from server"
    serverStatus : string ="";
    constructor(){
        this.serverStatus =Math.random() > 0.5 ? "Online" : "Offline"
    }
    getColor(){
        return this.serverStatus =='Online' ? 'yellowgreen' : 'red'
    }

}