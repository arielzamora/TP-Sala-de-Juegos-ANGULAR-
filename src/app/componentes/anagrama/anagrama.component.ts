import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'
import { ToastrService } from 'ngx-toastr';
import { DatabaseService} from '../../servicios/database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})

export class AnagramaComponent implements OnInit {
  nuevoJuego: JuegoAnagrama;
  enJuego: boolean = false;
  ocultarVerificar: boolean = false;


  constructor(private toastr: ToastrService,public authService: AuthService,private router: Router, public databaseService : DatabaseService){
    this.nuevoJuego = new JuegoAnagrama(databaseService);
  }

  verificarUsr() {
    this.ocultarVerificar = true;
    this.nuevoJuego.verificar();
    this.mostrarMensaje();
  }
 
  nuevo(): void {
    this.enJuego = true;
  }
  mostrarMensaje() {

    if (this.nuevoJuego.gano) {
      this.toastr.success("Lo lograste", "Bravo!");
    } else {
      this.toastr.error(this.nuevoJuego.palabraIngresada + ", no es anagrama de " + this.nuevoJuego.palabraSeleccionada, 
        "Seguí participando");
    }
    this.enJuego = false;
    this.ocultarVerificar = false;
    this.nuevoJuego.reset();

  }

  ngOnInit() {
  }

}