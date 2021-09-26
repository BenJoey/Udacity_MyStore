import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productList = this.productsService.getProducts();
  }

  onAdd(prod: Product, q: number): void {
    this.productsService.setQuantity(prod.id, q);
    alert("Item added to cart");
  }
}
