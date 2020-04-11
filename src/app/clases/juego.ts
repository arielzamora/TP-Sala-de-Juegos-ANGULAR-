import { DatabaseService } from "../servicios/database.service";
import { Data } from "@angular/router";

export enum ModoDeJuego
{
    Jugando = 1,
    NoJugando = 2        
}

export enum EstadoJuego
{
    Gano = 1,
    Perdio = 2,
    Nada = 3      
}

export enum Juegos{
  Memoria = "Memoria",
  AdivinaElNumero = "Adivina el Número",
  AgilidadAritmetica = "Agilidad Aritmética",
  PiedraPapelTijera = "Piedra, Papel o Tijera",
  Anagrama = "Anagrama",
  TaTeTi = "TaTeTi"
}

export abstract class Juego {
  public jugador: string;
  public ultimoPuntaje: number;
  public vidasRestantes: number;
  public modoDeJuego: ModoDeJuego;
  public segundosTranscurridos: number;
  public minutosTranscurridos: number;
  public estadoJuego : EstadoJuego;
  private intervaloTiempo : NodeJS.Timer;
  public juego : Juegos;
  private databaseService : DatabaseService; 

  constructor(juego: Juegos, databaseService : DatabaseService) {
    this.modoDeJuego = ModoDeJuego.NoJugando;
    this.ultimoPuntaje = 0;
    //this.vidasRestantes = vidasRestantes;
    this.minutosTranscurridos = 0;
    this.segundosTranscurridos = 0;
    this.estadoJuego = EstadoJuego.Nada;
    //this.juego = nombre;
    //this.databaseService = databaseService;
  } 

  public abstract Jugar();

  public ComenzarCronometro(){
    let horaInicio = new Date();
    this.intervaloTiempo = setInterval( () => {
      let horaActual : Date= new Date();
      let diferencia = Math.abs(horaActual.getTime() - horaInicio.getTime());;
      let tiempoTranscurrido = new Date(diferencia);
      this.minutosTranscurridos = tiempoTranscurrido.getMinutes();
      this.segundosTranscurridos = tiempoTranscurrido.getSeconds();
    },1000)
  }

  public FinalizarCronometro(){
    clearInterval(this.intervaloTiempo);
  }

  public GuardarResultado(){
    //this.databaseService.GuardarResultados(this.jugador,this.ultimoPuntaje,this.minutosTranscurridos,this.segundosTranscurridos,this.juego);
  }
}

