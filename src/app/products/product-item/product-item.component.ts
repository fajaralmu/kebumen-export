import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { doItLater } from 'src/app/util/EventUtil';

@Component({
  selector: 'div[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product | undefined;
  mouseover: boolean = false;
  transition: boolean = false;

  @Output()
  showDetail:EventEmitter<Product> = new EventEmitter();
  
  constructor() {
  }

  showDetailProduct = (p:Product) => {
    this.showDetail.emit(p);
  }

  get productName() {
    if (this.mouseover) {
      return this.product?.name;
    }
    return this.product?.name.substring(0, 16);
  } 

  ngOnInit(): void {
  }

   /**
   * mouseover true
   */
    setMouseOver = ( ) => {
      this.transition = true;
      doItLater(()=>{
        if (this.transition) {
          this.mouseover= true;
        }
        this.transition = false;
      }, 150);
    }
  
    /**
     * mouseover false
     */
    setMouseOut = () => { 
      this.transition=false; 
      this.mouseover=(false)
    }

}
