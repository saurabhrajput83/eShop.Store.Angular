import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductModel from '../models/product.model';
import ShoppingCartItemModel from '../models/shoppingcart-item.model';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/product/product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  productId: string = '';
  productQty: number = 1;
  product: ProductModel = <ProductModel>{};

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) {

  };

  addToCart(): void {
    let shoppingCartItem: ShoppingCartItemModel = <ShoppingCartItemModel>{};
    shoppingCartItem.productId = parseInt(this.productId);
    shoppingCartItem.quantity = this.productQty;

    console.log(shoppingCartItem)

    this.shoppingCartService.addItemToShoppingCart(shoppingCartItem)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );

    console.log("addToCart", this.productId);
  }

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.productId);
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        console.log(product);
        this.product = product;
      },
      (error) => console.log(error)
    );

  };

}
