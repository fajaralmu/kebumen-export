import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'div[app-product-detail]',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  product: Product | undefined;
  @Output()
  close:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  hideDetail = () => {
    this.close.emit();
  }

}
