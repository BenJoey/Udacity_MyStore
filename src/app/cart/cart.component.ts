import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productList: Product[] = [];
  cartPrice: number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productList = this.productsService.getProducts();//.filter(p => p.quantity > 0);
    this.calculatePrice();
  }

  calculatePrice() {
    this.cartPrice = 0;
    this.productList.map(p => {
      this.cartPrice += p.price * p.quantity;
    });
    this.cartPrice = Number(this.cartPrice.toFixed(2));
  }

}
