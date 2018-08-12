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
//img element is not added to browser DOM i.e it is not rendered at all as ngIf property is set to false
previewPhoto=false;

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
    this.datePickerConfig=Object.assign({},
      {
        containerClass:'theme-dark-blue'
      }
    
    );
  }
  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }
  ngOnInit() {}
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
