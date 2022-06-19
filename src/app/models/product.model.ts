import BrandModel from "./brand.model";

export default interface ProductModel {
  productId: number;
  productName: string;
  modelNumber: string;
  brandId: number;
  productSummary: string;
  productDescription: string;
  listPrice: number;
  sellingPrice: number;
  productInfoUrl: string;
  imageUrl: string;
  isFeatured: boolean;
  isActive: boolean;
  isHidden: boolean;
  isTaxable: boolean;
  hasFreeShipping: boolean;
  weight: number;
  length: number;
  breadth: number;
  height: number;
  brand: BrandModel;
}
