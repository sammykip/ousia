import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, args?: number,symbol?:string): string {
    if(!args){args=1;}
    if(!symbol){symbol="~";}
    console.log("args",args,"\nvalue:",value);
    return symbol+" "+value*args ;
  }

}
