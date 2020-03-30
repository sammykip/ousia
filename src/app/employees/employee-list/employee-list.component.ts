import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  RowSelect(model: Employee) {
    this.service.formData =Object.assign(Employee, model);
    this.service.list.filter(f => f.Mobile == "").find(f => f.Position == "developer");
    console.log("name: ", model.FullName);
    // https://twitter.com/share?
    // text=The%20Best%20Tools%20to%20(Productively)%20Gamify%20Every%20Aspect%20of%20Your%20Life&
    // via=lifehacker&
    // url=https%3A%2F%2Flifehacker.com%2Fthe-best-tools-to-productively-gamify-every-aspect-of-1531404316%3Futm_medium%3Dsharefromsite%26utm_source%3Dlifehacker_twitter%26utm_campaign%3Dbottom
  }
}
