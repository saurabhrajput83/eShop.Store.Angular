import ProductModel from "./product.model";

export default interface ShoppingCartItemModel {
  selectedItemId: number;
  shoppingCartId: number;
  productId: number;
  quantity: number;
  shoppingCart: any;
  product: ProductModel;
}
