import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
//import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule   } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from "@angular/forms";
import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { ResizeDirective } from './resize.directive';
import { MultiplyPipe } from './multiply.pipe';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    GuestDetailsComponent,
    ResizeDirective,
    MultiplyPipe,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule
    ,BrowserAnimationsModule
    //,ToasterModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
export class statics{
  static mouseenter:string="mouseenter";
  static mouseleave:string="mouseleave";
}
