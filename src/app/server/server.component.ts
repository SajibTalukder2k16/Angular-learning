import {Component} from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html'
})
export  class serverComponent{
  makeEnable = false;
  constructor() {
    setTimeout(()=>{
      this.makeEnable=true;
    },2000)
  }
}
