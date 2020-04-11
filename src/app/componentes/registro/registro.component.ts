import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Roles } from '../../clases/roles.enum';

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  rolesEnum = Roles;

  validation_messages = {
    'mail': [
      { type: 'required', message: 'Debe ingresar un email.' },
      { type: 'email', message: 'Debe ingresar un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Debe ingresar una contraseña.' }
    ],
    'password2': [
      { type: 'required', message: 'Debe ingresar una contraseña.' }
    ]
  };

 email:string;
 password:string;
 password2:string;
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

OnSubmitRegister(){
  this.authService.registeruser(this.email,this.password).then( authService => {
    this.router.navigate(['/Principal']);
  }).catch(err=> alert('los datos son incorrectos'))
  //console.log('Estas en la funcion');
}

}
