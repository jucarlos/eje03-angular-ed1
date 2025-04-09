import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'products-list',
        component: ListProductsComponent
      },
      {
        path: 'detail-product/:id',
        component: DetailsProductComponent
      },
      {
        path: '**',
        redirectTo: 'products-list'
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
