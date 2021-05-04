import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/product.interface';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  @Input() product: Product;

  constructor(public _product: ProductsDataService) {}

  ngOnInit(): void {}

  deleteProduct(productId) {
    this._product.deleteProduct(productId).subscribe(() => {
      const deletedProduct = this._product.allProducts.findIndex((product) => {
        product._id !== productId;
      });

      this._product.allProducts.splice(deletedProduct, 1);
    });
  }
}
