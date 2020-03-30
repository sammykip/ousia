import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'MyDuka';
  number1:number=1234;
  
  constructor() {
    this.title.trim();
    this.number1.toString();
    
  }
}
