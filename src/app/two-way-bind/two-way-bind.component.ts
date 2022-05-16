import {Component} from '@angular/core';

@Component({
  selector:'app-two-way-bind',
  templateUrl:'./two-way-bind.component.html',
  styleUrls:['./two-way-bind.component']
})

export class TwoWayBindComponent{
  public name:string = 'nilesh';
}