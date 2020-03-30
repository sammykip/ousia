import { Component } from '@angular/core';
import { Event } from '@angular/router';
import { Guest } from './guest';
 
@Component({
  selector: 'app-root',
  templateUrl: './ousia.component.html',
  styleUrls: ['./app.component.css']//,'../bs/css/bootstrap.css','../bs/css/bootstrap-grid.css'], 
  
})
export class AppComponent {
  title:string = 'MyDuka';
  guest:Guest;
  styles;
  names:Array<string>=["sam","pdm","kangethe"];
  availableRooms:number=5; 
  private date:Date;
  private dateFormat:string="dd-MMMM-yyyy";
  private cash:number=22.556;
  private mypipe:number=12.12;
  constructor() {
    
    this.date = new Date();
    console.log(this.date.toISOString());
    this.guest=new Guest(1,"sam","pdm",33,true);
    this.title.trim();
    this.styles={
      'font-style':this.guest.isVIP?"italic":"normal",
      'font-size':this.guest.isVIP?"24px":"12px",
      'font-weight':this.guest.isVIP?"bold":"normal",
    };
    this.listNames();
  }
//   up:string;
// fromChildEvent(evt){
//   this.up=evt;
// }
setText(evt:KeyboardEvent,key){
  //var string:string=  evt.target.value;
  console.log(evt);
  console.log("keycode",key);
  console.log(evt.key);
  console.log((<HTMLInputElement>evt.target).value);
  console.log((<string>(<HTMLInputElement>evt.target).value).toUpperCase());
}
onlyEnter(){
  console.log("ony enter pressed");
}
  getAvailableRooms(){
    return this.availableRooms;
  }
  reserveRoom(){
    this.availableRooms--;
  }
  allBooked(){
    return this.availableRooms<1;
  }
  show(event){
console.log(event.target.value);
  }
  listNames(){
   this.names.forEach(element => {
     console.log("Name:",element);
   });
  }
  guests=[];
  retrieveGuests(){
    this.guests=[
      {id:1,name:"sam",address:"addr1"},
      {id:2,name:"sam",address:"addr2"},
      {id:3,name:"sam",address:"addr3"},
      {id:4,name:"sam",address:"addr4"},
      {id:5,name:"sam",address:"addr5"},
      {id:6,name:"sam",address:"addr6"}
    ];
  }
  trackById(index:number,guest:any):number{
    return guest.id;
  }
}
