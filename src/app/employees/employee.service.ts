import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeService{
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'kesavan',
            gender: 'male',
            email: 'kjsfjb@mail.com',
            contactPreference: 'Email',
            dateOfBirth: new Date('08/04/1993'),
            department: '1',
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
            department: '2',
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
            department: '3',
            isActive: true,
            photoPath: 'assets/images/ic_cloudlauncher.png'
          }
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee){
        this.listEmployees.push(employee); 
    }
}