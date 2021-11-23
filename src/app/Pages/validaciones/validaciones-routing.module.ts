import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ValidacionesComponent } from "./validaciones.component";

const routes: Routes = [

  { 
    path: "",
    component: ValidacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidacionesRoutingModule { }
