import { Component, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/product.interface';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartObject: Product[];

  constructor(public _cart: CartDataService) {}

  ngOnInit(): void {
    this.cartObject = this._cart.cart;
  }
}
