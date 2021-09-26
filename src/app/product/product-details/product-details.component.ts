import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0
    };
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      productsService.getProducts().subscribe((res) => {
        this.product = res.find((p) => p.id == id) ?? res[0];
      });
    });
  }

  ngOnInit(): void {}

  onAdded() {
    this.cartService.addProduct(this.product);
    alert('Item added to cart');
  }
}
