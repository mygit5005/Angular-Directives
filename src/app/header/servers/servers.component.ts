import { Component } from "@angular/core";

@Component({
    selector:'app-servers',
    templateUrl:'./servers.component.html',
    // template:'<app-servers></app-servers><app-servers></app-servers>'
    // template:`
    //         <app-server></app-server>    
    //         <app-server></app-server>    

    // `,
    // styleUrls:['.servers.component.scss']
    styles : [],
})
export class ServersComponent{
    serverId:number =10;
    serverList:string[] =["Test server 1","Test server 2"]
    newServerStatus:string ="No server created yet";
    serverName:string="";
    isActive:Boolean=true;
    allowNewServer:boolean = true;
    constructor(){
        setTimeout(() => {
            this.allowNewServer =false
        },2000)
    }
    onServerCreated(){
        this.newServerStatus ="Server is created now"
        this.serverList.push(this.serverName)
    }
    onServerNameUpdate(eve:Event){
        console.log(eve.target)
        this.serverName =(<HTMLInputElement>eve.target).value
    }
    onKeyUp(eve:any){
        if(eve.keyCode ==13){
            alert("Enter is pressed")
        }
    }
    onKeyUp2(eve:any){
        alert("Enter is pressed")
    }
}