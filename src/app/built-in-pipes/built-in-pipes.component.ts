import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name:string="nilesH";
  public title:string="This is an angular notes";
  public data:object={
    fname:'Nil',
    lname:'Rajpurohit',
    age:'22'
  }

  public number:number = 5.679;
  public date:Date = new Date();
}
