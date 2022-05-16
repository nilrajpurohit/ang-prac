import {Component} from '@angular/core';

@Component({
  selector:'app-event-bind',
  templateUrl:'./event-bind.component.html',
  styleUrls:['./event-bind.component']
})

export class EventBindComponent{
  constructor(){}
  public data = 'Hello';
  public callMe() {
    alert(`${this.data} Angular Nude`);
  }

  public callEvent(event:object){
    console.log(event);
  }
}