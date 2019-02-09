import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() searchTerm: string;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
  });
  }

  editEmployee(){
    this._router.navigate(['/edit', this.employee.id]);
  }

}
