import {Component} from '@angular/core';

@Component({
  selector:'app-style-bind',
  templateUrl:'./style-bind.component.html',
  styleUrls:['./style-bind.component']
})

export class StyleBindComponent{
  constructor(){}
  public successColor:string = 'color:green';
  public successColorApply:string = "green";
  public isSuccess:boolean = true;

  public multiStyle:object = {
    color:'red',
    fontStyle:'italic'
  }
}