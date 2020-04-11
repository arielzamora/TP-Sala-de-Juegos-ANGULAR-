export class Resultado{
    public fecha : Date;
    public juego : string;
    public minutos : number;
    public segundos : number;
    public puntaje : number;
    public nombre : string;

    constructor(fecha : Date, juego : string, minutosTranscurridos : number, segundosTranscurridos : number,
        puntaje : number, nombre : string){
        this.fecha = fecha;
        this.juego = juego;
        this.minutos = minutosTranscurridos;
        this.segundos = segundosTranscurridos;
        this.puntaje = puntaje;
        this.nombre = nombre;
    }
}