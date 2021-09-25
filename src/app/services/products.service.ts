import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
    return this.productList;
  }
}
