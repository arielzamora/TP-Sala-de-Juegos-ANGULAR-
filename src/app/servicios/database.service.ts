
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Resultado } from '../clases/resultado';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  items :Observable<any[]>;
  retorno:Observable<Resultado[]>;
  returnPromesa:Promise<any> ;


  private resultadoColeccion:AngularFirestoreCollection<Resultado>;
  private resultadoDoc:AngularFirestoreDocument<Resultado>;
  private resultados:Observable<Resultado[]>;
  private resultado:Observable<Resultado>;
  constructor(private afs:AngularFirestore) {

    this.resultadoColeccion=afs.collection<Resultado>('resultados');
    this.resultados=this.resultadoColeccion.valueChanges();

   }

  public GuardarResultados(name : string, puntaje : number, minutosTranscurridos : number, segundosTranscurridos : number, juego : string) {

  }

  //public ListarResultados() : Resultado[]{

  // var listaResultados : Resultado[] = [];

      
  //  return listaResultados;
 // }

  public ListarResultados(): Observable<Resultado[]> {
    this.resultadoColeccion=this.afs.collection<Resultado>('resultados');
    return this.resultados=this.resultadoColeccion.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as Resultado;
         data.idResultado = action.payload.doc.id; 
         return data;
       });
     }));
  }

  2

  public guardarResultado(resultado:Resultado): Promise<any> {

    this.resultadoColeccion=this.afs.collection<Resultado>('resultados');
    return new Promise((resolve, reject) => {
  
    this.resultadoColeccion.add(resultado).then(result => {
      resolve(true);
      }).catch(err => {
        reject(false);
      });
    
    })
  }
}
