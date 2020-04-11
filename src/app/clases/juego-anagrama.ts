import { Juego, ModoDeJuego, EstadoJuego, Juegos } from '../clases/juego';
import { DatabaseService} from '../servicios/database.service';


interface IPalabra {
    anagramas: Array<string>;
}
interface IAnagrama{
    palabra:string;
}
export class JuegoAnagrama extends Juego {
    diccionario: {[id: string]: IPalabra; } = {
        "ARBOL": { anagramas: ["ALBOR", "BOLAR", "BORLA", "LABOR", "LABRO", "RALBO", "ROBLA"]},
        "CASA": { anagramas: ["ACAS", "ASCA", "SACA"]},
        "CIELO": { anagramas: ["LICEO"]},
        "GATO": { anagramas: ["GOTA", "TOGA"]},
        "LAPICERO": { anagramas: ["COPILARE", "COPLERIA", "POLARICE", "RECOPILA"]},
        "ALBOR": { anagramas: ["ARBOL", "BOLAR", "BORLA", "LABOR", "LABRO", "RALBO", "ROBLA"]},
        "ACAS": { anagramas: ["CASA", "ASCA", "SACA"]},
        "LICEO": { anagramas: ["CIELO","CELIO"]},
        "MACRI": { anagramas: ["GOTA", "TOGA","GATO"]},
    };
    diccionarioAnagramas: {[id: number]: IAnagrama; } = {
       1:{ palabra: "ARBOL"},
       2:{ palabra: "CASA"},
       3:{ palabra:"CIELO"},
       4:{ palabra:"GATO"},
       5:{ palabra:"LAPICERO"},
       6:{ palabra:"ALBOR"},
       7:{ palabra:"ACAS"},
       8:{ palabra:"LICEO"},
       9:{ palabra:"MACRI"},
    };
    palabraSeleccionada: string = "";
    palabraIngresada: string = "";
    palabra:string = "";
    cantidadPalabras:number=9;

    gano :boolean=false;

    constructor(databaseService: DatabaseService) {
        super(Juegos.AdivinaElNumero, databaseService);
        this.palabraRandom();
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();
        //&this.generarNumero();
      }

    palabraRandom(){ 
    
        var randomNumber = Math.floor(Math.random()*this.cantidadPalabras);
    
         this.palabra = this.diccionarioAnagramas[randomNumber].palabra.toString();
    
         this.palabraSeleccionada = this.palabra;
    
      }
    verificar() {
        this.diccionario[this.palabraSeleccionada].anagramas.forEach((ana) => 
        {
            if (this.palabraIngresada.toUpperCase() == ana)
                this.gano = true;
        })
        return this.gano;
    }
    

    reset(){
        //this.palabraSeleccionada = "";
        this.palabraIngresada = "";
        this.gano = false;
        this.palabraRandom();
    }
    private finDelJuego(){
        this.GuardarResultado();
        this.modoDeJuego = ModoDeJuego.NoJugando;
      }
}