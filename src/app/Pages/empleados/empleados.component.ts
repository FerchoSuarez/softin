import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  cedula: number;
  nombre: string;
  apellido: string;
  direccion: string;
  email: string;
  telefono: number;
  gruposanguineo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cedula:  1114399506, nombre: 'Diego Fernando', apellido: "Suarez Realpe", direccion: 'Cra 5a #35a-47', email: "fercho0989@gmail.com", telefono: 3002148738, gruposanguineo: "O-"},
  {cedula:  1045715871, nombre: 'Alexandra', apellido: "Altamar Garcerant", direccion: 'Cra 5a #35a-47', email: "axeladuvan@gmail.com", telefono: 3002148738, gruposanguineo: "A-"},
  

];

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'dirección', 'email', 'telefono','grupo sanguineo', 'acciones', ];
  dataSource = ELEMENT_DATA;
  constructor() { }
  

  ngOnInit(): void {
  }


}
