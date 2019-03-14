import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  @Input() departments: Department[];
  @Output() sendSelectedDepartment: EventEmitter<Department> = new EventEmitter<Department>();
  constructor() { }

  ngOnInit() {
  }
  sendSelected(dep: Department){
    this.sendSelectedDepartment.emit(dep);
  }

}
