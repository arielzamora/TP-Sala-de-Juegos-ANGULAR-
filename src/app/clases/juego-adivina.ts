import { Juego, ModoDeJuego, EstadoJuego, Juegos } from '../clases/juego';
import { DatabaseService} from '../servicios/database.service';

export class JuegoAdivina extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    private intervalo: NodeJS.Timer;
    gano :boolean=false;

    constructor(databaseService: DatabaseService) {
        super(Juegos.AdivinaElNumero, databaseService);
        //this.tiempoRestante = 0;
        //this.tecla = "?";
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();
        this.generarNumero();
      }

    public verificar() {
        if (this.numeroIngresado == this.numeroSecreto)
        this.gano = true;
        this.estadoJuego = EstadoJuego.Gano;
        this.FinalizarCronometro();
        clearInterval(this.intervalo);
        this.finDelJuego();
        if (this.gano) {
            return true
        }
        else {
            return false
        };
        
    }
    
    private finDelJuego(){
        this.GuardarResultado();
        this.modoDeJuego = ModoDeJuego.NoJugando;
      }

    public generarNumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
       // console.info('numero Secreto:' + this.numeroSecreto);
       this.estadoJuego = EstadoJuego.Nada;
    }

    public retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasaste";
    }
}
