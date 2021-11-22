import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';

 //components
 import { LayoutComponent } from "./Pages/layout/layout.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'articulos',
        loadChildren: () => import('./Pages/articulos/articulos.module').then((m) => m.ArticulosModule),
      },
      {
        path: 'compras',
        loadChildren: () => import('./Pages/compras/compras.module').then((m) => m.ComprasModule),
      },
      {
        path: '',
        redirectTo: "/articulos" ,
        pathMatch: "full",
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then((m) => m.LoginModule),
  },
/* {path: "encabezado", component: EncabezadoComponent},
{path: "menu", component:MenuComponent},
{path: "footer", component:FooterComponent},
{path: "principal", component: PrincipalComponent,},
{path: "empleados", component: EmpleadosComponent,},
{path: "registrar-empleados", component: RegistrarEmpleadosComponent},
{path: "proveedores", component: ProveedoresComponent},
{path: "registrar-proveedores", component: RegistrarProveedoresComponent},
{path: "compras", component: ComprasComponent},
{path: "registrar-compras", component: RegistrarComprasComponent},
{path: "articulos", component: ArticulosComponent},
{path: "registrar-articulos", component: RegistrarArticulosComponent}, */

{
  path: "**",
  redirectTo: "/articulos" ,
  pathMatch: "full",
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
