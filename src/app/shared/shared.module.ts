import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './components/dialog/alert-dialog/alert-dialog.component';
import { MaterialModule } from "@material/material.module";
import { RegistrarComprasComponent } from './components/dialog/registrar-compras/registrar-compras.component';
import { RegistrarEmpleadoComponent } from './components/dialog/registrar-empleado/registrar-empleado.component';


import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RegistrarProveedorComponent } from './components/dialog/registrar-proveedor/registrar-proveedor.component';
import { RegistrarArticuloComponent } from './components/dialog/registrar-articulo/registrar-articulo.component';


@NgModule({
  declarations: [
    AlertDialogComponent,
    RegistrarComprasComponent,
    RegistrarEmpleadoComponent,
    RegistrarProveedorComponent,
    RegistrarArticuloComponent,
  
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
