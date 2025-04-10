import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notAuthenticatedGuard } from './auth/guards/not-authenticated.guard';

const routes: Routes = [

  // home
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },

  //  auth
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canMatch: [

      notAuthenticatedGuard

    ]
  },
  // products
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule)
  },


  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
