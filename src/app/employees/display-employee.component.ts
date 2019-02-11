import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete =  false;
  
  constructor(private _router: Router, private _employeeService: EmployeeService) { }

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

  deleteEmployee(){
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      () => console.log(`Deleted = ${this.employee.id} sa`),
      (err) => console.log(err)
    );
    this.notifyDelete.emit(this.employee.id);
  }

}
