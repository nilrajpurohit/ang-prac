// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'reverseString'
// })
// export class ReverseStringPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }


import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name:'reverseString'
})

export class ReverseStringPipe implements PipeTransform{
  nvalue:string='';
  transform(value: any, ...args: any[]):any {
    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }
}