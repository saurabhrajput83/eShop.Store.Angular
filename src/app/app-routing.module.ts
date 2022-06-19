import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { ShoppingCartComponent } from './components/shoppingcart.component';
import { ShoppingCartService } from './services/shoppingcart.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productdetails/:id', component: ProductDetailsComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
