import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartContents: Product[] = [];

  constructor() {}

  getCart(): Product[] {
    return this.cartContents;
  }

  addProduct(product: Product) {
    let prod = this.cartContents.find((p) => p.id == product.id);
    if (prod != undefined) {
      prod.quantity += product.quantity;
    } else {
      this.cartContents.push(product);
    }
  }

  removeProduct(id: number) {
    this.cartContents = this.cartContents.filter((p) => p.id != id);
  }

  clearCart(): void {
    this.cartContents = [];
  }
}
