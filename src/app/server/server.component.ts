import {Component} from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html'
})
export  class serverComponent{
  makeEnable = false;
  serverComponentStatus = "No server is not created";
  serverName='';
  servers =['1','2','3','4','5','6'];
  constructor() {
    setTimeout(()=>{
      this.makeEnable=true;
    },2000)
  }
  onCreateServer(){
    this.serverComponentStatus= "Server Created";
  }
  onUpdateServer(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
