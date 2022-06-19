import { Component, OnInit } from '@angular/core';
import BrandModel from '../models/brand.model';
import DepartmentModel from '../models/department.model';
import NavItemModel from '../models/nav-item.model';
import ProductModel from '../models/product.model';
import { BrandService } from '../services/brand.service';
import { DepartmentService } from '../services/department.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/home/home.component.html'
})
export class HomeComponent implements OnInit {

  shopByBrandListTitle: string = '';
  shopByDepartmentListTitle: string = '';
  shopByBrandList: NavItemModel[] = [];
  shopByDepartmentList: NavItemModel[] = [];
  featuredProducts: ProductModel[] = [];
  newProducts: ProductModel[] = [];

  constructor(private brandService: BrandService,
    private departmentService: DepartmentService,
    private productService: ProductService) {

    this.shopByBrandListTitle = 'Shop By Brand';
    this.shopByDepartmentListTitle = 'Shop By Department';
  };

  ngOnInit(): void {

    this.brandService.getAllActiveBrands().subscribe(
      (brands) => {
        console.log("brands", brands);
        if (brands != null && brands.length > 0) {
          this.shopByBrandList = brands.map((brand, idx) => {
            var item: NavItemModel = {
              NavId: brand.brandId,
              NavName: brand.brandName,
              NavUrl: ''
            };
            return item;
          });
        }
      },
      (error) => console.log(error)
    );

    this.departmentService.getAllTopLevelDepartments().subscribe(
      (departments) => {
        console.log("departments", departments);
        if (departments != null && departments.length > 0) {
          this.shopByDepartmentList = departments.map((department, idx) => {
            var item: NavItemModel = {
              NavId: department.departmentId,
              NavName: department.departmentName,
              NavUrl: ''
            };
            return item;
          });
        }
      },
      (error) => console.log(error)
    );

    this.productService.getAllFeaturedProducts().subscribe(
      (products) => this.featuredProducts = products,
      (error) => console.log(error)
    );

    this.productService.getAllNewProducts().subscribe(
      (products) => this.newProducts = products,
      (error) => console.log(error)
    );

  };

}
