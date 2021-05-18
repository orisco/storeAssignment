import { Component, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/product.interface';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  constructor(public _product: ProductsDataService) {}

  ngOnInit(): void {
    this._product.getProducts().subscribe((res: Product[]) => {
      this._product.allProducts = res;
    });
  }
}
