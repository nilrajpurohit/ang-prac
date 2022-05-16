import { Component } from "@angular/core";

@Component({
  selector:'app-temp-ref',
  templateUrl:'./temp-ref.component.html',
  styleUrls:['./temp-ref.component']
})

export class TempRefComponent{
public checkval(data:string){
  alert(data);
}
}