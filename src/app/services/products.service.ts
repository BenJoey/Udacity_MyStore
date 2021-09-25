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
    for(let elem of list) {
      elem["quantity"] = 0;
    }
    this.productList = list;
  }

  getProducts(): Product[] {
    return this.productList;
  }
}
