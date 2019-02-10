import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list-employees',
    templateUrl: './list-employees.component.html',
    styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
    employees: Employee[];
    filteredEmployees: Employee[];
    error: string;
    

    private _searchTerm: string;
    get searchTerm(): string {
        return this._searchTerm;
    }
    set searchTerm(value: string) {
        this._searchTerm = value;
        this.filteredEmployees = this.filterEmployees(value);
    }

    constructor(private _router: Router, private _route: ActivatedRoute) {
        const resolvedData = this._route.snapshot.data['employeeList'];
        if(Array.isArray(resolvedData)){
            this.employees = resolvedData;
        } else{
            this.error = resolvedData;
        }
        this.filteredEmployees = this.employees;
    }

    ngOnInit() {

    }

    filterEmployees(searchTerm: string) {
        return this.employees.filter(employee =>
            employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }

    onDelete(id: number){
        const i = this.filteredEmployees.findIndex( e => e.id === id);
        if(i !== -1){
            this.filteredEmployees.splice(i,1);
        }
    }

}
