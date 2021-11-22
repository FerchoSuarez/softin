import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  referencia: string;
  valor: number;
  cantidad: number;
  codigo: string;
  numerofactura: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {referencia:  "Bujia 12 v", valor: 30000, cantidad: 5, codigo: "b12v", numerofactura: 525},
 

];



@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
displayedColumns: string[] = ['referencia', 'valor', 'cantidad', 'codigo', 'numerofactura', 'acciones', ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
