import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']//, '../../../bs/css/bootstrap.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) {
    //this.service=new EmployeeService();
    //this.resetForm();
    console.log("id:", this.service.formData.EmployeeID,
      "\n name", this.service.formData.FullName);
      this.service.multiplePrams("samwel");
  }

  ngOnInit() {
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
      let formData = new Employee();
      formData.EmployeeID = null;
      formData.FullName = formData.Mobile = formData.Position = formData.Mobile = formData.EMPCode = "";
      console.log("Full name:", formData.EmployeeID);
      this.service.formData = formData;
    }

  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postEmployee(<Employee>form.value).subscribe(res => {
      this.resetForm(form);
    });
  }
}
