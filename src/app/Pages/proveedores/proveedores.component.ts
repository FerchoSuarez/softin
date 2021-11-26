import { Component, OnInit } from '@angular/core';

//services
import { DialogService } from "@core/services/dialog.service";
import { left } from '@popperjs/core';

import { AlertDialogComponent } from "@shared/components/dialog/alert-dialog/alert-dialog.component";
import { RegistrarProveedorComponent} from "@shared/components/dialog/registrar-proveedor/registrar-proveedor.component";



export interface PeriodicElement {
  administrador: string;
  nombreproveedor: string;                    
  nitproveedor: string;
  telefonoproveedor: string;
  direccionproveedor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})

export class ProveedoresComponent implements OnInit {
  displayedColumns: string[] = ['administrador', 'nombreproveedor', 'nitproveedor', 'telefonoproveedor', 'direccionproveedor', 'acciones', ];
  dataSource:any = JSON.parse(localStorage.getItem('proveedores'));


  constructor(private dialogService: DialogService) { }



  ngOnInit(): void {

  }


  addBuy(){

    this.dialogService.openDialog(
      {
        template: RegistrarProveedorComponent,
        paneClass: 'dialog-class',
        callback: (res)=>{
          //do something
          if(res){
            this.dataSource = JSON.parse(localStorage.getItem('proveedores'))
          }
        }
      }
    );
    
  }
  deleteBuy(element){
    let proveedores = JSON.parse(localStorage.getItem('proveedores'))
    if (!proveedores) {
     proveedores=[]
    }
    let key = proveedores.findIndex((item)=> item.administrador == element.administrador)
    if (key >= 0) {
     proveedores.splice(key,1)
      localStorage.setItem('proveedores', JSON.stringify(proveedores))
      this.dataSource = JSON.parse(localStorage.getItem('proveedores'))
    }
  }

}
