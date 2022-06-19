import { Component, Input, OnInit } from '@angular/core';
import ProductModel from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-horizontal-list',
  templateUrl: '../templates/product/products-horizontal-list.component.html',
  styleUrls: []

})
export class ProductsHorizontalListComponent implements OnInit {

  @Input("listTitle") listTitle: string = '';
  @Input("list") list: ProductModel[] = [];

  constructor(private productService: ProductService) {
    //this.products = productService.getProducts();
    //console.log(this.products);
  };

  ngOnInit(): void {

  }
}
