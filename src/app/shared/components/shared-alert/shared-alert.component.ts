import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-alert',
  standalone: false,
  templateUrl: './shared-alert.component.html',
  styleUrl: './shared-alert.component.css'
})
export class SharedAlertComponent {

  
  public mensaje = input.required<string>();
  

}
