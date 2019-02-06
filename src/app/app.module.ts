import { EmployeeService } from './employees/employee.service';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { CreateEmployeeCanDeactivateGuard } from './employees/create-employee-can-deactivate-guard.service';




import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent
  },
  {
    path: 'create', 
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuard]
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent
  },
  {
  path: '', 
  redirectTo: '/list', 
  pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
