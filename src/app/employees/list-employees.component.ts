import { Component, OnInit } from "@angular/core";
import { Employee } from "../Models/employee.model";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: "Jouni",
      gender: "Male",
      contactPreference: "Email",
      email: "jouni@utu.fi",
      dateofBirth: new Date("10/25/1987"),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/jouni.png"
    },
    {
      id: 2,
      name: "Jenni",
      gender: "Female",
      contactPreference: "Phone",
      phoneNumber: 2345678989,
      dateofBirth: new Date("11/25/1988"),
      department: "Finance",
      isActive: true,
      photoPath: "assets/images/jenni.png"
    },
    {
      id: 3,
      name: "Jukka",
      gender: "Female",
      contactPreference: "Phone",
      phoneNumber: 2345677654,
      dateofBirth: new Date("11/05/1980"),
      department: "Administration",
      isActive: true,
      photoPath: "assets/images/jukka.png"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
