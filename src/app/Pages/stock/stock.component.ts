import { Component, OnInit } from '@angular/core';

//services
import { DialogService } from "@core/services/dialog.service";
import { left } from '@popperjs/core';

import { AlertDialogComponent } from "@shared/components/dialog/alert-dialog/alert-dialog.component";
import { RegistrarProveedorComponent} from "@shared/components/dialog/registrar-proveedor/registrar-proveedor.component";

export interface PeriodicElement {
  producto: string;
  referencia: string;                    
  codigo: string;
  cantidad: string;
  valor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {
  displayedColumns: string[] = ['producto', 'referencia', 'codigo', 'cantidad', 'valor', 'acciones', ];
  dataSource:any = JSON.parse(localStorage.getItem('stock'));



  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
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
