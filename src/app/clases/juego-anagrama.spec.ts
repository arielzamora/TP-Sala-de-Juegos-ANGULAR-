import { Juego } from '../clases/juego';

interface IPalabra {
    anagramas: Array<string>;
}

export class JuegoAnagrama extends Juego {
    diccinario: { [id: string]: IPalabra; } = {
        "ARBOL": { anagramas: ["ALBOR", "BOLAR", "BORLA", "LABOR", "LABRO", "RALBO", "ROBLA"] },
        "CASA": { anagramas: ["ACAS", "ASCA", "SACA"] },
        "CIELO": { anagramas: ["LICEO"] },
        "GATO": { anagramas: ["GOTA", "TOGA"] },
        "LAPICERO": { anagramas: ["COPILARE", "COPLERIA", "POLARICE", "RECOPILA"] },
        "OSCAR": { anagramas: ["ARCOS", "CAROS", "CRASO", "ROCAS", "ROSCA", "SACRO", "CORSA", "ORCAS"] },
        "GERARDO": { anagramas: ["DEROGAR", "REGADOR"] },
        "MONICA": { anagramas: ["CAMINO", "CAMION", "COMIAN", "NOMICA"] },
        "CERTIFICADOR": { anagramas: ["RECTIFICADOR"] },
        "CONQUISTADORES": { anagramas: ["RECONQUISTADOS"] },
        "BRASIL": { anagramas: ["SILBAR", "LIBRAS"] },
        "GRANADA": { anagramas: ["AGRADAN", "AGRANDA"] },
        "CRETA": { anagramas: ["CATRE", "TERCA"] },
    };
    palabraSeleccionada: string = "";
    palabraIngresada: string = "";

    constructor(name?: string, gano?: boolean, jugador?: string) {
        super('Anagrama', gano, jugador);
    }

    verificar() {
        this.diccinario[this.palabraSeleccionada].anagramas.forEach((anagrma) => {
            if (this.palabraIngresada.toUpperCase() == anagrma)
                this.gano = true;
        })
        return this.gano;
    }

    reset(){
        this.palabraSeleccionada = "";
        this.palabraIngresada = "";
        this.gano = false;
    }
}