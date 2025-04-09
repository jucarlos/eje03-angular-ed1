import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  standalone: false,
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent implements OnInit {


  private activatedRoute = inject( ActivatedRoute );


  ngOnInit(): void {
    
    
    // this.activatedRoute.params.subscribe ( resp => {
    //   console.log( resp['id'] )
    // });

    const id = this.activatedRoute.snapshot.params['id'];

    console.log( id );

  
  }


}
