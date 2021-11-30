import { Component, OnInit } from '@angular/core';

//services
import { DialogService } from "@core/services/dialog.service";
import { left } from '@popperjs/core';

import { AlertDialogComponent } from "@shared/components/dialog/alert-dialog/alert-dialog.component";
import { RegistrarComprasComponent} from "@shared/components/dialog/registrar-compras/registrar-compras.component";


export interface PeriodicElement {
  nombreproveedor: string;
  numeroDefactura: string;
  fecha: string;
  valor: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  displayedColumns: string[] = ['proveedor', 'numeroDeFactura', 'articulo', 'fecha', 'valor', 'acciones', ];
  dataSource:any = JSON.parse(localStorage.getItem('compras'));

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {

    this.getAllBuys();

  }

  addBuy(){

    this.dialogService.openDialog(
      {
        template: RegistrarComprasComponent,
        paneClass: 'dialog-class',
        callback: (res)=>{
          //do something
          if(res){
            this.getAllBuys();
          }
        }
      }
    );
    
  }

  deleteBuy(element){
    let compras = JSON.parse(localStorage.getItem('compras'))
    if (!compras) {
      compras=[]
    }
    let key = compras.findIndex((item)=> item.numeroDeFactura == element.numeroDeFactura)
    if (key >= 0) {
      compras.splice(key,1)
      localStorage.setItem('compras', JSON.stringify(compras))
      this.dataSource = JSON.parse(localStorage.getItem('compras'))
    }
  }

  getAllBuys(){
    const proveedores = JSON.parse(localStorage.getItem('proveedores'));
    let compras = JSON.parse(localStorage.getItem('compras'));
    let articulos = JSON.parse(localStorage.getItem('articulos'));
    if(proveedores && compras && articulos){
      if(proveedores.length && compras.length && articulos.length){
        proveedores.forEach((proveedor) => {
          let keyCompra = compras.findIndex((item) => item.proveedor == proveedor.nitproveedor)
          if(keyCompra >= 0){
            compras[keyCompra]['nombreProveedor'] = proveedor.administrador;
          }
        });
        articulos.forEach(articulo => {
          let keyArticulo = articulos.findIndex((item) => item.articulo == articulo.codigoarticulo)
          if(keyArticulo >= 0){
            compras[keyArticulo]['nombreArticulo'] = articulo.producto;
          }
        });
      }
    }
    console.log(compras);
    this.dataSource = compras
  }

}





