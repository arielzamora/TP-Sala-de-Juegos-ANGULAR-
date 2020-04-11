import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public nombreUsuario: string;
  public logueado: boolean;

  constructor(public authService: AuthService) {
    this.logueado = false;
   }

  ngOnInit() {
   // this.authService.getAuth().subscribe( auth => {
    //   if(auth){
    //     this.logueado = true;
     //    this.nombreUsuario = auth.displayName;
     //  }
     //  else{
     //    this.logueado = false;
     //  }
    // })
  }

  Logout(){
    this.authService.logout();
  }

}
