import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { doItLater } from 'src/app/util/EventUtil';

const IMAGE_ITEM_SWITCH_DELAY:number = 3000;

@Component({
  selector: 'div[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, AfterViewInit {
  private static firstChangeDelay:number = 0;

  @Input()
  product: Product | undefined;
  mouseover: boolean = false;
  transition: boolean = false;
  displayedImage: string | undefined;
  displayedImageIndex: number = 0;

  @Output()
  showDetail: EventEmitter<Product> = new EventEmitter();
  private loadedImages:string[] = [];
  private firstChangeDelay:number = 0;
  constructor() {
    this.firstChangeDelay = ProductItemComponent.firstChangeDelay;
    ProductItemComponent.firstChangeDelay+=2000;
  }
  ngAfterViewInit(): void {
    this.checkProduct();
  }

  checkProduct = () => {
    if (this.product) {
      this.displayedImage = this.product?.imageUrl;
      const t = setTimeout(()=>{
        this.switchImage();
        clearTimeout(t);
      }, this.firstChangeDelay);
     
      return;
    }
    doItLater(this.checkProduct, 50);
  }

  showDetailProduct = (p: Product) => {
    // this.showDetail.emit(p);
  }

  switchImage = () => {
    
    if (this.product) {
      const p = this.product;
      if (this.displayedImageIndex >= p.imageNames.length) {
        this.displayedImageIndex = 0;
      }
      
      const imageUrl:string = p.imageUrls[this.displayedImageIndex];
      if ( this.loadedImages.indexOf(imageUrl) > 0 )
      {
        this.displayedImage = p.imageUrls[this.displayedImageIndex];
        this.displayedImageIndex++;
        doItLater(this.switchImage, IMAGE_ITEM_SWITCH_DELAY);
        return;
      }
      let img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        this.displayedImage = img.src;
        this.displayedImageIndex++;
        this.loadedImages.push(img.src);
        doItLater(this.switchImage, IMAGE_ITEM_SWITCH_DELAY);
      }
      
    }
    
  }

  get productName() {
    if (this.mouseover) {
      return this.product?.name;//.toUpperCase();
    }
    return this.product?.name;//.toUpperCase();// .substring(0, 16);
  }

  ngOnInit(): void {

  }
  /**
  * mouseover true
  */
  setMouseOver = () => {
    this.transition = true;
    doItLater(() => {
      if (this.transition) {
        this.mouseover = true;
      }
      this.transition = false;
    }, 150);
  }

  /**
   * mouseover false
   */
  setMouseOut = () => {
    this.transition = false;
    this.mouseover = false;
  }

}
