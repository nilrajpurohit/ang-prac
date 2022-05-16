import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  constructor() { }
  public colors:string[] = ["red","blue","green","yellow"];
  ngOnInit(): void {
  }

}
