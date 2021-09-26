import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import * as products from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: Product[] = [];

  constructor() {
    let list = products.default;
    for (let elem of list) {
      elem['quantity'] = 0;
    }
    this.productList = list;
  }

  getProducts(): Product[] {
    return this.productList;
  }

  getProduct(id: number): Product {
    return this.productList.find((p) => p.id == id) ?? this.productList[0];
  }

  addQuantity(id: number, q: number) {
    let prod = this.productList.find((p) => p.id == id);
    if (prod != undefined) {
      prod.quantity += q;
    }
  }

  clearQuantity(id: number) {
    let prod = this.productList.find((p) => p.id == id);
    if (prod != undefined) {
      prod.quantity = 0;
    }
  }

  clearCart(): void {
    for (let item of this.productList) {
      item.quantity = 0;
    }
  }
}
