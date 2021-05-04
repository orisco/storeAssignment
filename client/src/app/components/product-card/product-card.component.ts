import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/product.interface';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor(public _cart: CartDataService) {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    let item = this._cart.cart.find((cartItem) => cartItem._id == product._id);

    if (this._cart.cart.length === 0 || !item) {
      product.quantity = 1;
      this._cart.cart.push(product);
      this._cart.cartDisplayButton = true;
      this._cart.totalPrice += product.price;
    } else {
      this._cart.totalPrice += product.price;
      item.quantity += 1;
    }
  }
}
