import { Component, OnInit } from '@angular/core';

//services
import { DialogService } from "@core/services/dialog.service";
import { left } from '@popperjs/core';

import { AlertDialogComponent } from "@shared/components/dialog/alert-dialog/alert-dialog.component";
import { RegistrarArticuloComponent} from "@shared/components/dialog/registrar-articulo/registrar-articulo.component";

export interface PeriodicElement {
  nombreproveedor: string;
  numerofactura: string;
  producto:string;
  codigoarticulo: string;
  cantidadarticulo: string;
  precioarticulo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  displayedColumns: string[] = ['nombreproveedor', 'numerofactura', 'producto', 'codigoarticulo', 'precioarticulo', 'cantidadInicial', 'acciones', ];
  dataSource:any = JSON.parse(localStorage.getItem('articulos'));

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  addBuy(){

    this.dialogService.openDialog(
      {
        template: RegistrarArticuloComponent,
        paneClass: 'dialog-class',
        callback: (res)=>{
          //do something
          if(res){
            this.dataSource = JSON.parse(localStorage.getItem('articulos'))
          }
        }
      }
    );

  }

  deleteBuy(element){
    let articulos = JSON.parse(localStorage.getItem('articulos'))
    if (!articulos) {
      articulos=[]
    }
    let key = articulos.findIndex((item)=> item.numeroDeFactura == element.numeroDeFactura)
    if (key >= 0) {
      articulos.splice(key,1)
      localStorage.setItem('articulos', JSON.stringify(articulos))
      this.dataSource = JSON.parse(localStorage.getItem('articulos'))
    }
  }


}
