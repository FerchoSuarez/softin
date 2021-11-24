import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras.component';
import { MaterialModule } from "@material/material.module";

import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    ComprasComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ComprasModule { }
