import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {EmpleadosComponent} from "./empleados.component";

const routes: Routes = [
  {
    path: '',
    component:EmpleadosComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
