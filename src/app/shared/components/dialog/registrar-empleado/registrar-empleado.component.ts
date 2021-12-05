import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Alert } from "@core/models/alert.interface";

import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  form: FormGroup;
  empleados:any = JSON.parse(localStorage.getItem('empleados'));

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegistrarEmpleadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
    ) {
       this.buildForm();
   }

  ngOnInit(): void {
    if (this.data.text) {
      const empleado = this.empleados.find(empleado => empleado.cedulaEmpleado == this.data.text);
      this.form.patchValue(empleado);
    }
  }

  closeDialog(data){
    this.dialogRef.close(data);
  }

  buildForm(): void{
    this.form = this.formBuilder.group({
      administrador: ['', [Validators.required]],
      cedulaEmpleado: ['', [Validators.required]],
      nombreEmpleado: ['', [Validators.required]],
      apellidoEmpleado: ['', [Validators.required]],
      telefonoEmpleado: ['', [Validators.required]],
      cargoEmpleado: ['', [Validators.required]],
    })
  }

  saveForm(){

    if(this.form.valid){
      let empleados = JSON.parse(localStorage.getItem('empleados'))
      if (!empleados) {
        empleados=[]
      }

      if (!this.data.text) {
        empleados.push(this.form.value);
      } else {
        empleados = this.empleados.filter((empleado: any) => empleado.cedulaEmpleado !== this.data.text);
        empleados.push(this.form.value);
      }

      localStorage.setItem('empleados', JSON.stringify(empleados))
      this.closeDialog(true);
    }else{
      location.reload();
    }

  }

}
