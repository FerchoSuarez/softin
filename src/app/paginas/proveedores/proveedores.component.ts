import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nit: string;
  razonsocial: string;
  direccion: string;
  email: string;
  telefono: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nit:  "1114399506-2", razonsocial: 'Kodi 4.0', direccion: 'Cra 5a #35a-47', email: "kodi_4@outlook.com", telefono: 3002148738},
 

];

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  displayedColumns: string[] = ['nit', 'razonsocial', 'direccion', 'email', 'telefono', 'acciones', ];
  dataSource = ELEMENT_DATA;

  constructor() { }


  ngOnInit(): void {
  }

}
