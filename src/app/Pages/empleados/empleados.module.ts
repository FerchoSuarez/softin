import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';
import { MaterialModule } from "@material/material.module";

import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    EmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    MaterialModule,
    SharedModule

  ],
  exports: [
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }
