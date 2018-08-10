import { Component, OnInit } from "@angular/core";
import { NgForm } from "../../../node_modules/@angular/forms";
import { Department } from "../models/department.model";
@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  // to make the radio button checked by default with the corresponding value
  //gender= 'male';
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "IT" },
    { id: 3, name: "HR" },
    { id: 4, name: "Administration" }
  ];
  constructor() {}

  ngOnInit() {}
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
