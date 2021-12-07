import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  usuarios : any = [
    {
      usuario: 'mla@gmail.com',
      clave: '123456'
    },
    {
      usuario: 'test@gmail.com',
      clave: '123456'
    },
  ]

  constructor(private fb: FormBuilder, private router: Router) {
    this.initForm();
    this.initTable();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.form = this.fb.group({
      usuario : ['mla@gmail.com', [Validators.required, Validators.email] ],
      clave: ['123456', Validators.required]
    });
  }

  initTable() {
    localStorage.setItem('usuarios',JSON.stringify(this.usuarios));
  }

  onSubmit() {
    const { usuario, clave } = this.form.value;
    this.usuarios.forEach((usr: any) => {
      if (usr.usuario == usuario && usr.clave == clave) {
        this.router.navigate(['inicio']);
        return false;
      }
    });
    alert('Hola, Bienvenido(a).....')
  }
}
