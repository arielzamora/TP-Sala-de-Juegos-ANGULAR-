import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Resultado } from '../clases/resultado';
import { AngularFirestore} from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  items :Observable<any[]>;


  constructor(private afDatabase : AngularFireDatabase) { }
  //constructor(private afireDatabase : AngularFirestore) { }

  public GuardarResultados(name : string, puntaje : number, minutosTranscurridos : number, segundosTranscurridos : number, juego : string) {
    console.log("Guardando resultado: " + name + " " +  puntaje + " " + minutosTranscurridos + " : " + segundosTranscurridos + " " + juego);
  /*   this.afDatabase.database.ref('resultados/').push({
      nombre: name,
      puntaje: puntaje,
      minutos: minutosTranscurridos,
      segundos: segundosTranscurridos,
      juego: juego,
      fecha: new Date().toDateString()
    }) */
  }

  public ListarResultados() : Resultado[]{

   var listaResultados : Resultado[] = [];

   var x =this.afDatabase.list('resultados');

    /* x.snapshotChanges().subscribe(item=>{
    item.forEach(element=>{
    var y=element.payload.toJSON();
    y['$key']=element.key;
    this.listaResultados.push(y as Resultado);
      });
    });  */
   /*   this.items = this.afireDatabase.collection('resultados').valueChanges();*/
  /*  this.afDatabase.database.ref('resultados').once('value', (data) => {
      data.forEach((child) => {*/
        let fecha : string = "10/10/2019";
        let juego: string = "Anagrama";
        let minutosTranscurridos : number = 2;
        let nombre : string = "admin";
        let puntaje : number = 100;       
        let segundosTranscurridos : number = 2;
       

        let resultado : Resultado = new Resultado(new Date(fecha), juego, minutosTranscurridos, segundosTranscurridos, puntaje, nombre);
        listaResultados.push(resultado);

        let fecha2 : string = "10/10/2019";
        let juego2: string = "Memoria";
        let minutosTranscurridos2 : number = 2;
        let nombre2 : string = "admin";
        let puntaje2 : number = 200;       
        let segundosTranscurridos2 : number = 2;
       

        let resultado2 : Resultado = new Resultado(new Date(fecha2), juego2, minutosTranscurridos2, segundosTranscurridos2, puntaje2, nombre2);
        listaResultados.push(resultado2);

        let fecha3 : string = "10/10/2019";
        let juego3: string = "Tateti";
        let minutosTranscurridos3 : number = 2;
        let nombre3 : string = "admin";
        let puntaje3 : number = 100;       
        let segundosTranscurridos3 : number = 2;
       

        let resultado3 : Resultado = new Resultado(new Date(fecha3), juego3, minutosTranscurridos3, segundosTranscurridos3, puntaje3, nombre3);
        listaResultados.push(resultado3);
      
    
    return listaResultados;
  }
}
