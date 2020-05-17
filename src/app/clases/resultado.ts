export class Resultado{
    public idResultado:string;
    public fecha : Date;
    public juego : string;
    public minutos : number;
    public segundos : number;
    public puntaje : number;
    public nombre : string;

    constructor(idResultado:string,fecha : Date, juego : string, minutosTranscurridos : number, segundosTranscurridos : number,
        puntaje : number, nombre : string){
        this.idResultado=idResultado;    
        this.fecha = fecha;
        this.juego = juego;
        this.minutos = minutosTranscurridos;
        this.segundos = segundosTranscurridos;
        this.puntaje = puntaje;
        this.nombre = nombre;
    }
}