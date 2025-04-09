import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    DetailsProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
