import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Product from 'src/app/interfaces/product.interface';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public form: FormGroup;

  constructor(public _fb: FormBuilder, public _product: ProductsDataService) {}

  ngOnInit(): void {
    if (this._product.adminAddProductToggle) {
      this.form = this._fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        price: [0, Validators.required],
        image: ['', Validators.required],
      });
    } else if (this._product.adminEditProductToggle) {
      this.form = this._fb.group({
        title: [this._product.editedProduct.title, Validators.required],
        description: [
          this._product.editedProduct.description,
          Validators.required,
        ],
        price: [this._product.editedProduct.price, Validators.required],
        image: [this._product.editedProduct.image, Validators.required],
      });
    }
  }

  addProduct() {
    this._product.addProduct(this.form.value).subscribe((res: Product) => {
      this._product.allProducts.push(res);
      this._product.closeBox();
    });
  }

  editProduct() {
    this._product
      .editProduct(this._product.editedProduct._id, this.form.value)
      .subscribe(() => {
        const editedProductIndex = this._product.allProducts.findIndex(
          (product) => product._id === this._product.editedProduct._id
        );
        this._product.allProducts.splice(
          editedProductIndex,
          1,
          this.form.value
        );
        this._product.closeBox();
      });
  }
}
