interface IEmployee{
  id:number,
  name:string,
  dep:string,
  sal:number
}

import {Injectable} from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError } from 'rxjs/operators';

@Injectable()

export class EmployeeService{
  constructor(private http:HttpClient){}
  public data:object={};
  public getEmployee():Observable<IEmployee>{
    return this.http.get<IEmployee>('/assets/employee.json').pipe(catchError(this.ErrorHandler));
  }

  public ErrorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Error Occur");
  }
}