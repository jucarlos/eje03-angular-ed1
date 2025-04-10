import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product-interface';

@Component({
  selector: 'app-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {


  private productsService = inject( ProductsService );
  
  public productos: Product[] = [];
  public isLoading: boolean = false;



  ngOnInit(): void {

    this.isLoading = true;
    this.productsService.getProducts()
    .subscribe ( resp => {

      this.productos = resp.products;
      this.isLoading = false;

      console.log( this.productos );
      
    })


  }



}
