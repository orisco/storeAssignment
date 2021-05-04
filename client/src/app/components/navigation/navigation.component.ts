import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/services/cart-data.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public admin: boolean = false;

  constructor(
    public _cart: CartDataService,
    public _product: ProductsDataService
  ) {}

  ngOnInit(): void {}

  toggleCart() {
    this._cart.toggleCartDisplay();
  }
}
