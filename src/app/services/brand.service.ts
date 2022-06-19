import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Config from '../app.config';
import BrandModel from '../models/brand.model';

@Injectable()
export class BrandService {

  private apiUrl: string = '';

  constructor(private httpClient: HttpClient) {

  }

  getAllActiveBrands(): Observable<BrandModel[]> {
    this.apiUrl = Config.baseUrl + 'BrandService/GetAllActiveBrands'

    return this.httpClient
      .get<BrandModel[]>(this.apiUrl, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
  }

}
