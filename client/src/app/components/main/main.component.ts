import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/interfaces/product.interface';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    public _product: ProductsDataService,
    public _activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._product.getProducts().subscribe((res: Product[]) => {
      this._product.allProducts = res;
    });
    switch (this._activated.snapshot.routeConfig.path) {
      case 'reports':
        this._product.reports = true;
        this._product.home = false;
        this._product.admin = false;
        break;
      case 'admin':
        this._product.home = false;
        this._product.reports = false;
        this._product.admin = true;
        break;
      case 'home':
        this._product.home = true;
        this._product.reports = false;
        this._product.admin = false;
        break;
    }
  }
}
