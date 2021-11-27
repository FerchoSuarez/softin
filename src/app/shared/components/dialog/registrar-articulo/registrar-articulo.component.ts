import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Alert } from "@core/models/alert.interface";

import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-registrar-articulo',
  templateUrl: './registrar-articulo.component.html',
  styleUrls: ['./registrar-articulo.component.css']
})
export class RegistrarArticuloComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegistrarArticuloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  closeDialog(data){
    this.dialogRef.close(data);
  }

  buildForm(): void{
    this.form = this.formBuilder.group({
      nombreproveedor: ['', [Validators.required]],
      numerofactura: ['', [Validators.required]],
      nombreempleado: ['', [Validators.required]],
      nombrearticulo: ['', [Validators.required]],
      precioarticulo: ['', [Validators.required]],
      codigoarticulo: ['', [Validators.required]],
      cantidadarticulo: ['', [Validators.required]],
    })
  }
  saveForm(){

    if(this.form.valid){
      let articulos = JSON.parse(localStorage.getItem('articulos'))
      if (!articulos) {
        articulos=[]
      }
      articulos.push(this.form.value);
      localStorage.setItem('articulos', JSON.stringify(articulos))
      this.closeDialog(true);
    }else{
      location.reload();
    }
    
  }

}
