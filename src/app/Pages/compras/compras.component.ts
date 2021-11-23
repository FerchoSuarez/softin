import { Component, OnInit } from '@angular/core';

//services
import { DialogService } from "@core/services/dialog.service";

import { AlertDialogComponent } from "@shared/components/dialog/alert-dialog/alert-dialog.component";
import { RegistrarComprasComponent} from "@shared/components/dialog/registrar-compras/registrar-compras.component";


export interface PeriodicElement {
  proveedor: string;
  numerofactura: string;
  fecha: string;
  producto: string;
  valor: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {proveedor:  "Kodi 4.0", numerofactura: '525', fecha: '18/11/2021', producto: "codigo", valor: "$30000"},
 

];

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  displayedColumns: string[] = ['proveedor', 'numerofactura', 'fecha', 'producto', 'valor', 'acciones', ];
  dataSource = ELEMENT_DATA;


  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {

    

  }

  addBuy(){
    this.dialogService.openDialog(
      {
        title: 'Atención',
        text: 'Vas a eliminar este documento',
        question: '¿Deseas continuar?',
        icon: 'fal fa-exclamation-circle text-pink-color-ff4880', 
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        cancelButton: true,
        template: RegistrarComprasComponent,
        paneClass: 'dialog-class',
        callback: (res)=>{
          //do something
        }
      }
    );
  }

}

