import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
 

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
