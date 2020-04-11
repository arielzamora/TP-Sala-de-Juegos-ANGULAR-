import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AuthService } from '../../servicios/auth.service';

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 email:string;
 password:string;
constructor(private auth : AuthService,public router:Router) { }

ngOnInit() {
}

OnSubmitRegister(){
  this.auth.registeruser(this.email,this.password).then( auth => {
    this.router.navigate(['/home']);
  }).catch(err=> alert('los datos son incorrectos'))
  //console.log('Estas en la funcion');
}

}
