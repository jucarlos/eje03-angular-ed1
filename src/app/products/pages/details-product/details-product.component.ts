import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product-interface';

@Component({
  selector: 'app-details-product',
  standalone: false,
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent implements OnInit {

  private activatedRoute = inject( ActivatedRoute );

  public product: Product | null = null ;


  ngOnInit(): void {
        
    // this.activatedRoute.params.subscribe ( resp => {
    //   console.log( resp['id'] )
    // });

    const slug = this.activatedRoute.snapshot.params['id'];
  
    /// Llamar al servicio e imprimir en la consola los datos de este producto.
    // Tarea. 2 cosas. 1. incluir el servicio y luego llamarle.

    ////////////////

  
  }




}
