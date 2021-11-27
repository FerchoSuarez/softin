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
  producto: string;
  valor: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  displayedColumns: string[] = ['proveedor', 'numeroDeFactura', 'fecha', 'producto', 'valor', 'acciones', ];
  dataSource:any = JSON.parse(localStorage.getItem('compras'));

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    
  }

  addBuy(){

    this.dialogService.openDialog(
      {
        template: RegistrarComprasComponent,
        paneClass: 'dialog-class',
        callback: (res)=>{
          //do something
          if(res){
            this.dataSource = JSON.parse(localStorage.getItem('compras'))
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

}





