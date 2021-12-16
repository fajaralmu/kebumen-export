import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() : Product[]
  {
    const products:Product[]  = [
      new Product("Basketwork and wickerwork", 
                  "Desc Basketwork and wickerwork", 
                  "Basketwork-and-wickerwork.jpeg")
      .addImage("basket2.jpg", "basket3.jpg", "basket4.jpg", "basket5.jpg", "basket6.jpg", "basket7.jpg", "basket8.jpg"),
      
      new Product("Cocorope", 
                  "Desc Cocorope", 
                  "Cocorope.jpeg")
      .addImage("cocorope2.jpg", "cocorope3.jpg"),
      
      new Product("Handmade pots form coconut fiber", 
                  "Desc Handmade pots form coconut fiber", 
                  "Handmade-pots-form-coconut-fiber.jpeg")
      .addImage("pots2.jpg"),
      
      new Product("Others craft", 
                  "Desc Others craft", 
                  "Others-craft.jpeg")
      .addImage("others2.jpg", "others3.jpg"),
      
      new Product("Mats", 
                  "Desc Mats", 
                  "Mats.jpeg")
      .addImage("Mats2.jpg"),
    ];
    
    return products.sort((a,b) => {
      return a.name < b.name ? 0 : 1
     } );
  }
}
