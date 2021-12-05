import { Component, OnInit } from '@angular/core';

//services
import { DialogService } from "@core/services/dialog.service";
import { left } from '@popperjs/core';

import { AlertDialogComponent } from "@shared/components/dialog/alert-dialog/alert-dialog.component";
import { RegistrarEmpleadoComponent} from "@shared/components/dialog/registrar-empleado/registrar-empleado.component";



export interface PeriodicElement {
  administrador: string;
  cedulaEmpleado: string;
  nombreEmpleado: string;
  apellidoEmpleado: string;
  telefonoEmpleado: string;
  cargoEmpleado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  displayedColumns: string[] = ['administrador', 'cedulaEmpleado', 'nombreEmpleado', 'apellidoEmpleado', 'telefonoEmpleado', 'cargoEmpleado', 'acciones', ];
  dataSource:any = JSON.parse(localStorage.getItem('empleados'));


  constructor(private dialogService: DialogService) { }


  ngOnInit(): void {
  }


  addBuy(){

    this.dialogService.openDialog(
      {
        template: RegistrarEmpleadoComponent,
        paneClass: 'dialog-class',
        callback: (res)=>{
          //do something
          if(res){
            this.dataSource = JSON.parse(localStorage.getItem('empleados'))
          }
        }
      }
    );

  }

  deleteBuy(element){
    let empleados = JSON.parse(localStorage.getItem('empleados'))
    if (!empleados) {
      empleados=[]
    }
    let key = empleados.findIndex((item)=> item.administrador == element.administrador)
    if (key >= 0) {
      empleados.splice(key,1)
      localStorage.setItem('empleados', JSON.stringify(empleados))
      this.dataSource = JSON.parse(localStorage.getItem('empleados'))
    }
  }

  onEdit(cedulaEmpleado:string) {
    this.dialogService.openDialog(
      {
        template: RegistrarEmpleadoComponent,
        paneClass: 'dialog-class',
        text: cedulaEmpleado,
        callback: (res)=>{
          //do something
          if(res){
            this.dataSource = JSON.parse(localStorage.getItem('empleados'))
          }
        }
      }
    );
  }

}
