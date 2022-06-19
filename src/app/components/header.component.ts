import { Component, OnInit } from '@angular/core';
import DepartmentModel from '../models/department.model';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-header',
  templateUrl: '../templates/shared/header.component.html',
  styleUrls: []

})
export class HeaderComponent implements OnInit {

  public title: string = 'eShop Admin';
  public departments: DepartmentModel[] = [];

  constructor(private departmentService: DepartmentService) {


  };

  ngOnInit(): void {
    //this.departmentService.getDepartments().subscribe(
    //  (departments) => this.departments = departments,
    //  (error) => console.log(error)
    //);
  };

};


