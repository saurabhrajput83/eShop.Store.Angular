import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import DepartmentModel from '../models/department.model';
import Config from '../app.config';


@Injectable()
export class DepartmentService {

  private apiUrl: string = '';

  constructor(private httpClient: HttpClient) {

  };

  getAllTopLevelDepartments(): Observable<DepartmentModel[]> {
    this.apiUrl = Config.baseUrl + 'DepartmentService/GetAllTopLevelDepartments';
    return this.httpClient
      .get<DepartmentModel[]>(this.apiUrl);
  };

}
