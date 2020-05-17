
export class Jugador{
    public idUsuario : string;
    public usuario : string;
    public gano : boolean;
    public juego : string;
    public puntaje : number;

    constructor(idUsuario : string,usuario : string, gano : boolean, juego : string, puntaje : number){
        this.idUsuario=idUsuario;
        this.usuario=usuario;
        this.gano=gano;
        this.juego=juego;
        this.puntaje=puntaje;
    }
}