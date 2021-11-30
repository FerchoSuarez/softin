import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Alert } from "@core/models/alert.interface";

import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-registrar-compras',
  templateUrl: './registrar-compras.component.html',
  styleUrls: ['./registrar-compras.component.css']
})
export class RegistrarComprasComponent implements OnInit {

  form: FormGroup;

  listProveedores = []
  listArticulos = []

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegistrarComprasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
    ) { 
      const proveedores = JSON.parse(localStorage.getItem('proveedores'));
      if(proveedores){
        if(proveedores.length){
          this.listProveedores = proveedores;
        }
      }
      const articulos = JSON.parse(localStorage.getItem('articulos'));
      if(articulos){
        if(articulos.length){
          this.listArticulos = articulos;
        }
      }
    this.buildForm();
  }

  ngOnInit(): void {
  }

  closeDialog(data){
    this.dialogRef.close(data);
  }

  buildForm(): void{
    this.form = this.formBuilder.group({
      proveedor: ['', [Validators.required]],
      articulo: ['', [Validators.required]],
      numeroDeFactura: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    })
  }

  saveForm(){

    if(this.form.valid){
      let compras = JSON.parse(localStorage.getItem('compras'))
      if (!compras) {
        compras=[]
      }
      compras.push(this.form.value);
      localStorage.setItem('compras', JSON.stringify(compras))
      this.closeDialog(true);
    }else{
      location.reload();
    }
    
  }

}
