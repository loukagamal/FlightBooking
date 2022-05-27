import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PassengerDetailsComponent
  ],
  imports: [
    CommonModule,
    PassengerRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
exports:[PassengerDetailsComponent]
})
export class PassengerModule { }
