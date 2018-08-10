import { Component, OnInit } from "@angular/core";
import { NgForm } from "../../../node_modules/@angular/forms";
import { Department } from "../models/department.model";
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import { container } from "../../../node_modules/@angular/core/src/render3/instructions";
@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig:Partial<BsDatepickerConfig>;
  // to make the radio button checked by default with the corresponding value
  //gender= 'male';
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "IT" },
    { id: 3, name: "HR" },
    { id: 4, name: "Administration" }
  ];
  constructor() {
    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue'});
  }

  ngOnInit() {}
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
