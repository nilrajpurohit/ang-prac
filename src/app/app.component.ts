import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent{
  public name:string = "Nilesh Rajpurohit";
  public age:number = 22;
  public isMale:boolean = true;
}
