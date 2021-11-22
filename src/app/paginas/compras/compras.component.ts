import { Component, OnInit } from '@angular/core';


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


  constructor() { }

  ngOnInit(): void {
  }

}
