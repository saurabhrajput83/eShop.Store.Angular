import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Config from '../app.config';
import ProductModel from '../models/product.model';


@Injectable()
export class ProductService {

  private baseUrl: string = 'http://localhost:5000/api/'
  private apiUrl: string = '';


  constructor(private httpClient: HttpClient) {
  }

  getAllFeaturedProducts(): Observable<ProductModel[]> {
    this.apiUrl = Config.baseUrl + 'ProductService/GetAllFeaturedProducts';
    return this.httpClient
      .get<ProductModel[]>(this.apiUrl);
  }

  getAllNewProducts(): Observable<ProductModel[]> {
    this.apiUrl = this.baseUrl + 'ProductService/GetAllNewProducts';
    return this.httpClient
      .get<ProductModel[]>(this.apiUrl);
  }

  getProductById(productId: string): Observable<ProductModel> {
    this.apiUrl = this.baseUrl + 'ProductService/GetProductById/' + productId;
    return this.httpClient
      .get<ProductModel>(this.apiUrl);
  }


}
