import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './components/dialog/alert-dialog/alert-dialog.component';
import { MaterialModule } from "@material/material.module";
import { RegistrarComprasComponent } from './components/dialog/registrar-compras/registrar-compras.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AlertDialogComponent,
    RegistrarComprasComponent
  ],
  entryComponents: [
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
