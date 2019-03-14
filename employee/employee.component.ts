import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empName = 'Govind';
  empId = '11';
  visible: boolean = false;
  employeeList: Employee[] = [
    { id: 1, name: 'Govind', address: 'Rawatbhata1', dob: new Date('12-June-1978'), salary: 100000 },
    { id: 2, name: 'Krishan', address: 'Rawatbhata2', dob: new Date('13-June-1971'), salary: 10000 },
    { id: 3, name: 'RAM', address: 'Rawatbhata3', dob: new Date('14-June-1978'), salary: 10000000 },
    { id: 4, name: 'Govind1', address: 'Rawatbhata4', dob: new Date('15-June-1978'), salary: 1000 },
    { id: 5, name: 'Govind2', address: 'Rawatbhata5', dob: new Date('16-June-1978'), salary: 100000000 },
    {
      id: 6, name: 'Govind3', address: 'Rawatbhata6', dob: new Date('17-June-1978'), salary: 100
    }]
  empRole: string = 'super Admin';
  text = 'Ramjaane Ramjaane';
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.visible = !this.visible;
  }

  employeeFromChild(emp: Employee) {
    console.log(emp);
  }
}
