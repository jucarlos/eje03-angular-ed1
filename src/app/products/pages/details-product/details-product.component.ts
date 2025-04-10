import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product-interface';
import { ProductsService } from '../../services/products.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-details-product',
  standalone: false,
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent implements OnInit {

  private activatedRoute = inject( ActivatedRoute );
  private productsService = inject( ProductsService );

  public product: Product | null = null ;

  public isLoading: boolean = false;

  public getImagenUrl(): string {
    return `${environment.baseUrl}/api/files/product/${this.product?.images[0]}`
  }


  ngOnInit(): void {
        
    // this.activatedRoute.params.subscribe ( resp => {
    //   console.log( resp['id'] )
    // });

    this.isLoading = true;
    const slug = this.activatedRoute.snapshot.params['id'];
    
    this.productsService.getProductById(slug).subscribe ( resp => {
      console.log( resp );
      this.product = resp;
      this.isLoading = false;

    })
  
  
  }




}
