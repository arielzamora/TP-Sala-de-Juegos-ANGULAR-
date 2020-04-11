import { Injectable } from '@angular/core';
import { ArchivosJugadoresService}from './archivos-jugadores.service'
import { Jugador } from '../clases/jugador';
@Injectable()
export class JugadoresService {

  //peticion:any;
 // constructor( public miHttp: ArchivosJugadoresService ) {
  constructor() {
   // this.peticion = this.miHttp.traerJugadores();
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }


filtrado:any;

  traertodos(ruta : string,filtro: string) 
  {
    var listaJugadores : Jugador[] = [];
    /* return this.miHttp.traerJugadores(ruta).then(data=>{
      console.info("jugadores service",data);

      this.filtrado=data;

     let  ganador: boolean;
      if(filtro=="ganadores")
      {
        ganador= true;
      }
      else
      {
        ganador= false;
      }

      this.filtrado =this.filtrado.filter(
        data => data.gano === ganador  || filtro=="todos" ); return this.filtrado}
      )
      .catch(errror=>{console.log("error") */
      


  /*   return this.filtrado;
      

    }); */
    let usuario : string="admin";
    let gano : boolean=true;
    let juego : string="Memoria";
    let puntaje : number=100;
 

   

    let resultado : Jugador = new Jugador(usuario,gano,juego,puntaje);
    listaJugadores.push(resultado);

    let usuario2 : string="admin";
    let gano2 : boolean=true;
    let juego2 : string="Memoria";
    let puntaje2 : number=100;
 

   

    let resultado2 : Jugador = new Jugador(usuario2,gano2,juego2,puntaje2);
    listaJugadores.push(resultado2);

    let usuario3 : string="admin";
    let gano3 : boolean=true;
    let juego3 : string="Memoria";
    let puntaje3 : number=100;
 

   

    let resultado3 : Jugador = new Jugador(usuario3,gano3,juego3,puntaje3);

    listaJugadores.push(resultado3);

    let usuario4 : string="admin";
    let gano4 : boolean=true;
    let juego4 : string="Memoria";
    let puntaje4 : number=100;
 

   

    let resultado4 : Jugador = new Jugador(usuario4,gano4,juego4,puntaje4);
    listaJugadores.push(resultado4);


    this.filtrado=listaJugadores;
    
    return this.filtrado;
  }

}
