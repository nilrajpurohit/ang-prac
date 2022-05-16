import { Component } from "@angular/core";

@Component({
  selector:'app-class-bind',
  templateUrl:'./class-bind.component.html',
  styles:[`
    .text-success{
      color:green;
    }
    .text-failure{
      color:red
    }
    .text-info{
      color:blue
    }
  `]
})

export class ClassBindComponent{
  public isSuccess:boolean = false;
  public failText:string = "text-failure"
  public multiClass:object = {
    'text-success': this.isSuccess,
    'text-failure':!this. isSuccess
  }
}