import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Alert } from "@core/models/alert.interface";

@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
  styleUrls: ['./descarga.component.css']
})
export class DescargaComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DescargaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert) { }

  ngOnInit(): void {
    alert(this.data.text);
  }

}
