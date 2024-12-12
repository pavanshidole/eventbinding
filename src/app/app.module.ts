import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/product/product.component';
import { Product2Component } from './shared/components/product2/product2.component';
import { Product3Component } from './shared/components/product3/product3.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    Product2Component,
    Product3Component
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
