import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  productDetail:Product | undefined;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  showDetail(p:Product)
  {
    this.productDetail = p;
  }

  hideDetail()
  {
    this.productDetail = undefined;
  }

}
