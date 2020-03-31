import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import "rxjs/add/observable/from";
import { Location, LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee = new Employee();
  list: Employee[];
  readonly rootURL: string = "http://localhost:5001/ousiaAPI";
  constructor(private http: HttpClient) {
    this.formData.EmployeeID = null;
    this.formData.FullName = this.formData.Mobile = this.formData.Position = this.formData.Mobile = this.formData.EMPCode = "";
  }
  postEmployee(formData: Employee) {
    //0723 629 340
    this.list.push(formData);

    return this.http.post(this.rootURL + "putItem", formData).pipe();

    //return new Observable<Object>();
  }
  refreshList() {
    //  this.http.get(this.rootURL+"getItems").toPromise().then(res=>{
    //    this.list=(res as Employee[]);
    //  });
    this.list = [
      { EmployeeID: 0, EMPCode: "1", Position: "manager", FullName: "PDM", Mobile: "987654" },
      { EmployeeID: 0, EMPCode: "1", Position: "manager", FullName: "PDM", Mobile: "987654" },
      { EmployeeID: 0, EMPCode: "1", Position: "manager", FullName: "PDM", Mobile: "987654" },
    ];
    this.multiplePrams("sam", 1, 2, 4);
  }
  multiplePrams(name: string, ...args: Number[]) {
    (5).toString(); String(5);
    console.log((4095).toString(8));
    let num: Number = 123456.987654;
    console.log("Fixed: ", (num).toFixed(1));
    console.log("Exponential: ", (num).toExponential(4));
    console.log("presicion: ", num.toPrecision(4));
    console.log(Number("55a"));//NaN
    let myArray = new Array<number>();
    myArray.push(1); myArray.push(7); myArray.push(4);
    myArray.push(myArray.shift());//Rotates array ROL
    myArray.unshift(myArray.pop());//ROR
    console.log(myArray.every(e => { if (e < 5) { return true; } else { return false; } }));
    let employees = new Array<Employee>();
    employees.push(new Employee("sam", "001", "0723", "Developer"));
    employees.push(new Employee("david", "001", "0723", "Developer"));
    employees.push(new Employee("Elias", "001", "0723", "Developer"));
    console.log("some phone numbers are empty?:", employees.some(s => s.Mobile == ""));
    console.log("employees named sam?:", employees.filter(f => f.FullName.includes("sam")));
    // //.find()=> FOD();
    console.log("Total IDs: ", employees.filter(f => f.EMPCode).reduceRight((r, f) => r + f.EmployeeID, 0));
    //console.log("Total IDs: ",employees.filter(f=>f.EMPCode).map());
    let myTuple: { [name: string]: [number, boolean] } = {};
    myTuple["sam"] = [22, false];
    myTuple["kilai"] = [25, true];
    for (let key in myTuple) {
      if (myTuple.hasOwnProperty(key)) {
        //const element = myTuple[key];
        console.log(`name: ${key}\t age: ${myTuple[key][0]}\t Married: ${myTuple[key][1]}`);
      }
    }
    Observable.from(this.list);
    console.log(<Number>args[0]);
  }
}
