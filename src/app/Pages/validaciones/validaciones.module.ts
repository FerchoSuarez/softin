import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacionesRoutingModule } from './validaciones-routing.module';
import { ValidacionesComponent } from './validaciones.component';
import { MaterialModule } from "@material/material.module";


@NgModule({
  declarations: [
    ValidacionesComponent
  ],
  imports: [
    CommonModule,
    ValidacionesRoutingModule,
    MaterialModule
  ]
})
export class ValidacionesModule { }
