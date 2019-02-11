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

    baseURL = "http://localhost:3000/employees";
    constructor(private _httpClient: HttpClient) {

    }

    getEmployees(): Observable<Employee[]> {
        return this._httpClient.get<Employee[]>(this.baseURL)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.log('Client Error', errorResponse.error.message);
        } else {
            console.log('Server error', errorResponse);
        }

        return new ErrorObservable('Error in service we are working on it');
    }

    getEmployee(id: number): Observable<Employee> {
        return this._httpClient.get<Employee>(`${this.baseURL}/${id}`).pipe(catchError(this.handleError));
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this._httpClient.post<Employee>(this.baseURL, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }

    updateEmployee(employee: Employee): Observable<void> {
        return this._httpClient.put<void>(`${this.baseURL}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }

    deleteEmployee(id: number): Observable<void> {
        return this._httpClient.delete<void>(`${this.baseURL}/${id}`).pipe(catchError(this.handleError));
    }
}