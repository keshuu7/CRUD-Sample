import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class EmployeeService {
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

    getEmployees(): Observable<Employee[]> {
        return Observable.of(this.listEmployees).delay(2000);
    }

    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
    }

    save(employee: Employee) {
        if (employee.id === null) {
            const maxid = this.listEmployees.reduce(function(e1,e2){
                return (e1.id > e2.id) ? e1 : e2;
            }).id;
            employee.id = maxid + 1;
            this.listEmployees.push(employee);
        } else {
            const foundIndex = this.listEmployees.findIndex( e => e.id === employee.id);
            this.listEmployees[foundIndex] = employee;
        }
    }
}