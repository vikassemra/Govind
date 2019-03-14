import { Component, OnInit } from '@angular/core';
import{ Department} from './department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  departmentList:Department[] = [{id:1, name:'IT', hod:'Govind', count: 1000},
  {id:2, name:'Testing', hod:'Govind1', count: 10000},
  {id:3, name:'HR', hod:'Govind2', count: 100000},
  {id:4, name:'Mechanical', hod:'Govind3', count: 1000000},
  {id:5, name:'Electrical', hod:'Govind4', count: 10000000},];
  depart: Department = new Department();
  constructor() { }

  departmentFromChild(dept: Department){
    this.depart = dept;
    console.log(dept);
  }

}
