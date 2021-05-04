import { Injectable } from '@angular/core';
import Product from '../interfaces/product.interface';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  public cart: Product[] = [];
  public totalPrice: number = 0;

  public cartDisplayButton: boolean = false;

  constructor(public _request: WebRequestService) {}

  toggleCartDisplay() {
    this.cartDisplayButton = !this.cartDisplayButton;
  }

  sendCartToServer() {
    this._request
      .post('checkout/add', {
        date: new Date().toDateString(),
        products: this.cart,
        total: this.totalPrice,
      })
      .subscribe(() => {
        this.cart = [];
        this.totalPrice = 0;
        this.cartDisplayButton = false;
      });
  }
}
