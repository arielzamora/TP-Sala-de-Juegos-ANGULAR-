
import { Juego, ModoDeJuego, EstadoJuego, Juegos } from '../clases/juego';
import { DatabaseService} from '../servicios/database.service';


export class JuegoAgilidad extends Juego {
    operadores: Array<string> = ["+", "-", "*"];
    operador: string;
    operandoUno: number = 0;
    operandoDos: number;
    resultado: number;
    numeroIngresado: number = 0;
    gano :boolean=false;

    constructor(databaseService: DatabaseService) {
        super(Juegos.AgilidadAritmetica, databaseService);
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();
        //&this.generarNumero();
      }

    public generarOperacion(): void {
        this.operandoUno = Math.floor((Math.random() * 20) + 1);
        this.operandoDos = Math.floor((Math.random() * 10) + 1);
        this.operador = this.operadores[Math.floor(Math.random() * this.operadores.length)];
        this.resultado = this.calcular();
        console.info(this.operandoUno,this.operador,this.operandoDos,"=",this.resultado);
    }

    public calcular(): number {
        let result: number;
        switch (this.operador) {
            case "+":
                result = this.operandoUno + this.operandoDos;
                break;
            case "-":
                result = this.operandoUno - this.operandoDos;
                break;
            case "*":
                result = this.operandoUno * this.operandoDos;
                break;
        }
        return result;
    }

    public verificar(): boolean {
        if (this.numeroIngresado == this.resultado)
            this.gano = true;
        return this.gano;
    }

    public reset(): void{
        this.operador = "";
        this.operandoUno = 0;
        this.operandoDos = 0;
        this.resultado = 0;
        this.numeroIngresado = 0;
        this.gano = false;
    }
}
