import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  quantity: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    }
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.product = productsService.getProduct(id);
    });
  }

  ngOnInit(): void {
  }

  onAdded() {
    this.productsService.addQuantity(this.product.id, this.quantity);
    alert("Item added to cart");
  }

}
