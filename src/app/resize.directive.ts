import { Directive ,ElementRef, HostListener, Input} from '@angular/core';
import { statics } from './app.module';

@Directive({
  selector: '[Resize]'
})
export class ResizeDirective {
@Input("Resize") Resize;

  constructor(public el:ElementRef) { 
    console.log(el);
    el.nativeElement.size=100;
  }
@HostListener("mouseenter") 
onMouseEnter(){
this.el.nativeElement.size=this.Resize;
};
@HostListener("mouseleave") 
onMouseLeave(){
this.el.nativeElement.size=20; 
};
}
