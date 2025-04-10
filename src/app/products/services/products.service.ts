import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsReponse } from '../interfaces/product-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private http = inject( HttpClient );
  private baseUrl = environment.baseUrl;


  getProducts(): Observable<ProductsReponse> {

    const url = `${this.baseUrl}/api/products`;
    return this.http.get<ProductsReponse>( url );

  }


  getProductById( id: string ): Observable<Product> {

    const url = `${this.baseUrl}/api/products/${id}`;
    return this.http.get<Product>( url );

  }
}
