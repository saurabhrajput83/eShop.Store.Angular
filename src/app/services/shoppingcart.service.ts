import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Config from '../app.config';
import ShoppingCartItemModel from '../models/shoppingcart-item.model';

@Injectable()
export class ShoppingCartService {

  private baseUrl: string = 'http://localhost:5000/api/'
  private apiUrl: string = '';

  constructor(private httpClient: HttpClient) {

  }

  //getShoppingCart(): Observable<ShoppingCartModel> {
  //  return this.httpClient
  //    .get<ShoppingCartModel>('../../assets/data/shoppingcart.json');
  //}


  addItemToShoppingCart(shoppingCartItem: ShoppingCartItemModel): Observable<ShoppingCartItemModel> {
    this.apiUrl = Config.baseUrl + 'ShoppingCartService/AddItemToShoppingCart'
    return this.httpClient
      .post<ShoppingCartItemModel>(this.apiUrl, shoppingCartItem);
  };

}
