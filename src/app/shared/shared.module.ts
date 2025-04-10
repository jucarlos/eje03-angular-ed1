import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedSpinnerComponent } from './components/shared-spinner/shared-spinner.component';
import { SharedAlertComponent } from './components/shared-alert/shared-alert.component';


@NgModule({
  declarations: [
    SharedSpinnerComponent,
    SharedAlertComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedSpinnerComponent,
    SharedAlertComponent,
  ]
})
export class SharedModule { }
