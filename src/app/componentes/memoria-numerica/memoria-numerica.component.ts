import { Component, OnInit } from '@angular/core';
import { JuegoMemoria } from '../../clases/juego-memoria'
import { ToastrService } from 'ngx-toastr';
import { DatabaseService} from '../../servicios/database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-memoria-numerica',
  templateUrl: './memoria-numerica.component.html',
  styleUrls: ['./memoria-numerica.component.css']
})
export class MemoriaComponent implements OnInit {
  nuevoJuego: JuegoMemoria;
  enJuego: boolean = false;
  tiempoCumplido: boolean = false;
  ocultarVerificar: boolean = false;
  tiempo: number;
  tiempoJuego: number;
  repetidor: any;


  constructor(private toastr: ToastrService,public authService: AuthService,private router: Router, public databaseService : DatabaseService){
    this.nuevoJuego = new JuegoMemoria(databaseService);
    this.tiempoJuego = 3;
  }

  setInputNumeroIngresado(){
    setTimeout(()=>{
      (<HTMLInputElement>document.getElementById("input-ingresado")).value = null;
      document.getElementById("input-ingresado").focus();
    }, 1);
  }

  verificarUsr() {

    this.ocultarVerificar = true;
    this.nuevoJuego.verificar();
    this.mostrarMensaje();
  }


  nuevo(): void {
    this.setInputNumeroIngresado();
    this.enJuego = true;
    this.tiempoCumplido=true;
    //this.nuevoJuego.generarOperacion();
    this.repetidor = setInterval(() => {
      this.tiempoJuego--;
      if (this.tiempoJuego == 0) {
        clearInterval(this.repetidor);
        //this.verificar();
        this.ocultarNumeros();
        this.tiempoJuego = 3;
      }
    }, 900);
  }

  ocultarNumeros()
  {
    this.tiempoCumplido=false;
    this.toastr.success("Tiempo");

  }


  mostrarMensaje() {

    if (this.nuevoJuego.gano) {
      this.toastr.success("Ganaste!");
    } else {
      this.toastr.error(this.nuevoJuego.NumeroUnoIngresado + ", no es un numero mostrado Anteriormente ", 
        "Seguí participando");
    }
    
    this.enJuego = false;
    this.ocultarVerificar = false;
    this.nuevoJuego.reset();

  }

  ngOnInit() {
  }

}