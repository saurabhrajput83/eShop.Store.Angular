import { Component, OnInit } from '@angular/core';
import BrandModel from '../models/brand.model';
import DepartmentModel from '../models/department.model';
import NavItemModel from '../models/nav-item.model';
import ProductModel from '../models/product.model';
import { BrandService } from '../services/brand.service';
import { DepartmentService } from '../services/department.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-department-products',
  templateUrl: '../templates/department/department-products.component.html'
})
export class DepartmentProductsComponent implements OnInit {

  shopByBrandListTitle: string = '';
  shopByDepartmentListTitle: string = '';
  shopByBrandList: NavItemModel[] = [];
  shopByDepartmentList: NavItemModel[] = [];
  electronicProducts: ProductModel[] = [];

  constructor(private brandService: BrandService,
    private departmentService: DepartmentService,
    private productService: ProductService) {

    this.shopByBrandListTitle = 'Shop By Brand';
    this.shopByDepartmentListTitle = 'Shop By Department';
  };

  ngOnInit(): void {

    //this.brandService.getBrands().subscribe(
    //  (brands) => {
    //    if (brands != null && brands.length > 0) {
    //      this.shopByBrandList = brands.map((brand, idx) => {
    //        var item: NavItemModel = {
    //          NavId: brand.BrandId,
    //          NavName: brand.BrandName,
    //          NavUrl: ''
    //        };
    //        return item;
    //      });
    //      console.log(this.shopByBrandList);
    //    }
    //  },
    //  (error) => console.log(error)
    //);

    //this.departmentService.getDepartments().subscribe(
    //  (departments) => {
    //    if (departments != null && departments.length > 0) {
    //      this.shopByDepartmentList = departments.map((department, idx) => {
    //        var item: NavItemModel = {
    //          NavId: department.DepartmentId,
    //          NavName: department.DepartmentName,
    //          NavUrl: ''
    //        };
    //        return item;
    //      });
    //      console.log(this.shopByBrandList);
    //    }
    //  },
    //  (error) => console.log(error)
    //);

    //this.productService.getProducts().subscribe(
    //  (products) => this.electronicProducts = products,
    //  (error) => console.log(error)
    //);


  };

}
