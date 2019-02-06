import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  searchTerm: string;
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  onClick(employeeid: number){
    this._router.navigate(['/employees', employeeid]);
  }

}
