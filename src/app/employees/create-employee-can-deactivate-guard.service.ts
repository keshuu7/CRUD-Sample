import { CreateEmployeeComponent } from './create-employee.component';
import { CanDeactivate } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class CreateEmployeeCanDeactivateGuard implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent): boolean{
        if(component.createEmployeeForm.dirty){
            return confirm('Are you sure?');
        }
        return true;
    }
}