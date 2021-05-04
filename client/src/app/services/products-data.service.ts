import { Injectable } from '@angular/core';
import Product from '../interfaces/product.interface';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  public allProducts: Product[] = [];

  // current page
  public reports: boolean = false;
  public admin: boolean = false;
  public home: boolean = false;

  //add product modal
  public adminAddProductToggle: boolean = false;

  //edit product modal
  public adminEditProductToggle: boolean = false;
  public editedProduct: Product;

  constructor(private _request: WebRequestService) {}

  // get all products
  getProducts() {
    return this._request.get('product/all');
  }

  addProduct(body) {
    return this._request.post('product/admin/add-product', body);
  }

  editProduct(id, body) {
    return this._request.put('product/admin/' + id, body);
  }

  deleteProduct(productId) {
    return this._request.delete('product/admin/delete/' + productId);
  }

  toggleAdminAddProductBox() {
    this.adminEditProductToggle = false;
    this.adminAddProductToggle = true;
  }

  toggleAdminEditProductBox(product) {
    this.adminAddProductToggle = false;
    this.adminEditProductToggle = true;
    this.editedProduct = product;
  }

  closeBox() {
    this.adminAddProductToggle = false;
    this.adminEditProductToggle = false;
  }
}
