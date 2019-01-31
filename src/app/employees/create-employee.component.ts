import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Admin'}
  ];

  constructor() { 
    this.datePickerConfig = Object.assign({},
      {containerClass: 'theme-dark-blue', 
      showWeekNumbers: false,
      minDate: new Date(2018,0,1),
      maxDate: new Date(2018,11,31),
      dateInputFormat: 'DD/MM/YYYY'});
  }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void{
    console.log(empForm.value);
  }

}
