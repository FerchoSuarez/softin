import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { MaterialModule } from "@material/material.module";



@NgModule({
  declarations: [
    ArticulosComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    MaterialModule,
   
  ]
})
export class ArticulosModule { }
