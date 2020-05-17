import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any
  miJugadoresServicio:JugadoresService
  
    constructor(serviceJugadores:JugadoresService) {
      this.miJugadoresServicio = serviceJugadores;
      this.TraerTodos();
    }
    


  ngOnInit() {
  }


  TraerTodos(){

      this.miJugadoresServicio.traertodos().subscribe(
        data => {
          this.listado = data;
         // this.dataFiltros=this.listaPeliculas;
        },
        error => {
          console.log(error);
        }
      );
  } 

}
