import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private emp:EmployeeService) { }

  public employees:object={};
  ngOnInit(): void {
  }

  public getEmployee() {
    this.emp.getEmployee().subscribe((data)=>{
      this.employees = data;
      console.log(this.employees);
    },(error)=>{
      console.log(error);
    })
  }
}
