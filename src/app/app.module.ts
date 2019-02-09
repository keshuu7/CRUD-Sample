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
import { EmployeeListResolverService } from './employees/employee-list-resolver-service';
import { PageNotFounndComponent } from './page-not-founnd.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService}
  },
  {
    path: 'edit/:id', 
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuard]
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService]
  },
  {
  path: '', 
  redirectTo: '/list', 
  pathMatch: 'full'
  },
  {
    path: 'notfound',
    component: PageNotFounndComponent
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
    EmployeeFilterPipe,
    PageNotFounndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuard, EmployeeListResolverService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
