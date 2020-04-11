import { Juego, ModoDeJuego, EstadoJuego, Juegos } from '../clases/juego';
import { DatabaseService} from '../servicios/database.service';


interface INumeros{
    numeros:Array<number>;
}
export class JuegoMemoria extends Juego {

    diccionarioNumeros: {[id: number]: INumeros; } = {
        1 :{ numeros:[2569,2354,6589]},
        2:{ numeros:[1579,1953,3779]},
        3:{ numeros:[3569,7854,3589]},
        4:{ numeros:[2119,2334,6579]},
        5:{ numeros:[2569,2312,6589]},
        6:{ numeros:[2739,2311,9589]},
        7:{ numeros:[2566,1555,6579]},
        8:{ numeros:[2555,2354,9739]},
        9:{ numeros:[2539,9674,1589]},
     };
    numerosSeleccionado:Array<number>;
    NumeroUnoIngresado: number ;
    palabra:string = "";
    numeroUnoSeleccionado:number;
    
    cantidadNumeros:number=9;
    randomNumber:number;
    private intervalo: NodeJS.Timer;
    gano :boolean=false;

    constructor(databaseService: DatabaseService) {
        super(Juegos.AdivinaElNumero, databaseService);
        //this.tiempoRestante = 0;
        //this.tecla = "?";
        this.Jugar();
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();
        this.numerosRandom();
      }

    
    numerosRandom(){ 
    
        this.randomNumber = Math.floor(Math.random()*this.cantidadNumeros);
    
         this.numerosSeleccionado = this.diccionarioNumeros[this.randomNumber].numeros;
    
      }
    verificar() {
        this.diccionarioNumeros[this.randomNumber].numeros.forEach((ana) => 
        { 
            if (this.NumeroUnoIngresado == ana)
                this.gano = true;
        })
        return this.gano;
    }
    

    reset(){
        //this.palabraSeleccionada = "";
        this.NumeroUnoIngresado=0;
        this.gano = false;
        this.numerosRandom();
    }
    private finDelJuego(){
        this.GuardarResultado();
        this.modoDeJuego = ModoDeJuego.NoJugando;
      }
}