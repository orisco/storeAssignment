import { Component, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/product.interface';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public _product: ProductsDataService) {}

  ngOnInit(): void {
    this._product.getProducts().subscribe((res: Product[]) => {
      this._product.allProducts = res;
    });
  }
}
