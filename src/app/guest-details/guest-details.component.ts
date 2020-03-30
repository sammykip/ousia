import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guest } from '../guest';
import { Event } from '@angular/router';

@Component({
  selector: 'guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {
  @Input()
  guest:Guest;
  @Output()
  fromChild=new EventEmitter();
  sendToParent(surname:string){
    console.log(surname);
    this.fromChild.emit(surname);
  }
  fromParent(){
    this.guest.firstName="Modified";
    this.guest.surname="modified surname";
  }
  constructor() { }

  ngOnInit() {
  }

}
