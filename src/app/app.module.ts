import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { HomeComponent } from './components/home.component';
import { ProductsHorizontalListComponent } from './components/products-horizontal-list.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { LinksVerticalList } from './components/links-vertical-list.component';
import { MyAccountMiniComponent } from './components/myaccount-mini.component';
import { ShoppingCartMiniComponent } from './components/shoppingcart-mini.component';
import { BrandProductsComponent } from './components/brand-products.component';
import { DepartmentProductsComponent } from './components/department-products.component';
import { ShoppingCartComponent } from './components/shoppingcart.component';

import { BrandService } from './services/brand.service';
import { DepartmentService } from './services/department.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shoppingcart.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsHorizontalListComponent,
    ProductDetailsComponent,
    LinksVerticalList,
    MyAccountMiniComponent,
    ShoppingCartMiniComponent,
    BrandProductsComponent,
    DepartmentProductsComponent,
    ShoppingCartComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [
    BrandService,
    DepartmentService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
