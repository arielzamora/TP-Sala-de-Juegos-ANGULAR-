
export class Jugador{
    public usuario : string;
    public gano : boolean;
    public juego : string;
    public puntaje : number;

    constructor(usuario : string, gano : boolean, juego : string, puntaje : number){
        this.usuario=usuario;
        this.gano=gano;
        this.juego=juego;
        this.puntaje=puntaje;
    }
}