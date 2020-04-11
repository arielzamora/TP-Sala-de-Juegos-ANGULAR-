import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Roles } from '../../clases/roles.enum';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
   
  form: FormGroup;
  rolesEnum = Roles;

  validation_messages = {
    'mail': [
      { type: 'required', message: 'Debe ingresar un email.' },
      { type: 'email', message: 'Debe ingresar un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Debe ingresar una contraseña.' }
    ]
  };


  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private toastService: ToastrService) {
    
      this.form = this.formBuilder.group({
        mail: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email
        ])),
        password: new FormControl('', Validators.required)
      });

  }

  ngOnInit() {
  }
  
  onSubmitLogin() {
    this.authService.login(this.form.get('mail').value, this.form.get('password').value)
      .then(res => {
        console.log(res);
        this.router.navigate(['/Principal']);
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          this.toastService.error('Usuario no encontrado.');
        } else if (error.code === 'auth/wrong-password') {
          this.toastService.error('Contraseña incorrecta.');
        } else {
          this.toastService.error('Ocurrió un error, contáctese con el administrador.');
        }
      });
  }

  cargarDatos(rol: Roles) {
    switch (rol) {
      case Roles.admin:
        this.form.get('mail').setValue('admin@admin.com');
        this.form.get('password').setValue('123456');
        break;
      case Roles.invitado:
        this.form.get('mail').setValue('invitado@gmail.com');
        this.form.get('password').setValue('222222');
        break;
        case Roles.usuario:
        this.form.get('mail').setValue('usuario@gmail.com');
        this.form.get('password').setValue('333333');
        break;
        case Roles.anonimo:
        this.form.get('mail').setValue('anonimo@gmail.com');
        this.form.get('password').setValue('444444');
        break;
        case Roles.tester:
        this.form.get('mail').setValue('tester@gmail.com');
        this.form.get('password').setValue('555555');
        break;
    }
  }

  
}