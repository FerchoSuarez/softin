import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '@Pages/inicio/inicio.component';

 //components
 import { LayoutComponent } from "./Pages/layout/layout.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'empleados',
        loadChildren: () => import('./Pages/empleados/empleados.module').then((m) => m.EmpleadosModule),
      },
      {
        path: 'proveedores',
        loadChildren: () => import('./Pages/proveedores/proveedores.module').then((m) => m.ProveedoresModule),
      },
      {
        path: 'articulos',
        loadChildren: () => import('./Pages/articulos/articulos.module').then((m) => m.ArticulosModule),
      },
      {
        path: 'compras',
        loadChildren: () => import('./Pages/compras/compras.module').then((m) => m.ComprasModule),
      },

      {
        path: 'stock',
        loadChildren: () => import('./Pages/stock/stock.module').then((m) => m.StockModule),
      },
      {
        path: '',
        redirectTo: "/login" ,
        pathMatch: "full",
      }
    ]
  },
{
  path: "**",
  redirectTo: "/login" ,
  pathMatch: "full",
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
