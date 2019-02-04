import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  previewPath = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
      id: null,
      name: null,
      gender: null,
      email: null,
      phoneNumber: null,
      contactPreference: null,
      dateOfBirth: null,
      department: 'select',
      isActive: null,
      photoPath: null,
      passWord: null,
      confirmPassWord: null
  };
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Admin'}
  ];

  constructor() { 
    this.datePickerConfig = Object.assign({},
      {containerClass: 'theme-dark-blue', 
      dateInputFormat: 'DD/MM/YYYY'});
  }

  togglepreview() {
    this.previewPath = !this.previewPath;
  }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void{
    console.log(newEmployee);
  }

}
