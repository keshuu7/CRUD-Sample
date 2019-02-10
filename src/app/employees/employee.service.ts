import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class EmployeeService {
    constructor(private _httpClient: HttpClient){

    }
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
        return this._httpClient.get<Employee[]>('http://localhost:3000/employees')
                .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse){
        if(errorResponse.error instanceof ErrorEvent){
            console.log('Client Error',errorResponse.error.message);
        } else {
            console.log('Server error',errorResponse);
        }

        return new ErrorObservable('Error in service we are working on it');
    }

    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
    }

    save(employee: Employee): Observable<Employee> {
        if (employee.id === null) {
            return this._httpClient.post<Employee>('http://localhost:3000/employees',employee,{
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'    
                })
            }).pipe(catchError(this.handleError));
        } else {
            const foundIndex = this.listEmployees.findIndex( e => e.id === employee.id);
            this.listEmployees[foundIndex] = employee;
        }
    }

    deleteEmployee(id: number){
        const i = this.listEmployees.findIndex( e => e.id === id);
        if(i !== -1){
            this.listEmployees.splice(i,1);
        }
    }
}