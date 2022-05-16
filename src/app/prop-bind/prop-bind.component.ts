import { Component } from "@angular/core";

@Component({
    selector:'app-prop-bind',
    templateUrl:'./prop-bind.component.html',
    styleUrls:['./prop-bind.component.css']
})

export class PropBindComponent{
  public name:string = "Nilesh Rajpurohit";
  public age:number = 22;
  public gender:string = "male";
}