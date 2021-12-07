import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Alert } from "@core/models/alert.interface";

import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrls: ['./registrar-proveedor.component.css'],
})
export class RegistrarProveedorComponent implements OnInit {

  form: FormGroup;
  proveedores:any = JSON.parse(localStorage.getItem('proveedores'));

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegistrarProveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
    ) {
        this.buildForm();
  }

  ngOnInit(): void {
    if (this.data.text) {
      const proveedor = this.proveedores.find(proveedor => proveedor.nitproveedor == this.data.text);
      this.form.patchValue(proveedor);
    }
  }

  closeDialog(data){
    this.dialogRef.close(data);
  }

  buildForm(): void{
    this.form = this.formBuilder.group({
     administrador: ['', [Validators.required]],
     nombreproveedor: ['', [Validators.required]],
     nitproveedor: ['', [Validators.required]],
     telefonoproveedor: ['', [Validators.required]],
     direccionproveedor: ['', [Validators.required]],
    })
  }

  saveForm(){

    if(this.form.valid){
      let proveedores = JSON.parse(localStorage.getItem('proveedores'))
      if (!proveedores) {
        proveedores=[]
      }

      if (!this.data.text) {
        proveedores.push(this.form.value);
      } else {
        proveedores = this.proveedores.filter((proveedor: any) => proveedor.nitproveedor !== this.data.text);
        proveedores.push(this.form.value);
      }

      localStorage.setItem('proveedores', JSON.stringify(proveedores))
      this.closeDialog(true);
    }else{
      location.reload();
    }

  }

}




