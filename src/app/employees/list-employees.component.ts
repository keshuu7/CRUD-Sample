import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees = [
    {
      id: 1,
      name: 'kesavan',
      gender: 'male',
      email: 'kjsfjb@mail.com',
      contactPreference: 'Email',
      dateOfBirth: new Date('08/04/1993'),
      department: 'ECE',
      isActive: true,
      photoPath: 'assets/images/ic_cloudlauncher.png'
    },
    {
      id: 2,
      name: 'sdf',
      gender: 'male',
      email: 'kjsfjb@mail.com',
      contactPreference: 'Email',
      dateOfBirth: new Date('04/08/1993'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/ic_cloudlauncher.png'
    },
    {
      id: 3,
      name: 'tty',
      gender: 'male',
      email: 'kjsb@mail.com',
      contactPreference: 'Email',
      dateOfBirth: new Date('04/08/1993'),
      department: 'CSE',
      isActive: true,
      photoPath: 'assets/images/ic_cloudlauncher.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
