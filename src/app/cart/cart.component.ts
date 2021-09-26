import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  productList: Product[] = [];
  cartPrice: number = 0;
  submitted: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productList = this.cartService.getCart();
    this.calculatePrice();
  }

  ngOnDestroy(): void {
    if(this.submitted){
      this.cartService.clearCart();
    }
  }

  calculatePrice() {
    this.cartPrice = 0;
    this.productList.map((p) => {
      this.cartPrice += p.price * p.quantity;
    });
    this.cartPrice = Number(this.cartPrice.toFixed(2));
  }

  onRemove(id: number): void {
    this.productList = this.productList.filter((p) => p.id != id);
    this.cartService.removeProduct(id);
    this.calculatePrice();
  }

  onSubmit(): void {
    this.submitted = true;
  }

}
