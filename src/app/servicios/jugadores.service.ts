import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';
import { ArchivosJugadoresService}from './archivos-jugadores.service'
import { Jugador } from '../clases/jugador';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable()
export class JugadoresService {
  retorno:Observable<Jugador[]>;
  returnPromesa:Promise<any> ;


  private jugadorColeccion:AngularFirestoreCollection<Jugador>;
  private jugadorDoc:AngularFirestoreDocument<Jugador>;
  private jugadores:Observable<Jugador[]>;
  private jugador:Observable<Jugador>;
  constructor(private afs:AngularFirestore) {


    this.jugadorColeccion=afs.collection<Jugador>('jugadores');
    this.jugadores=this.jugadorColeccion.valueChanges();

  }


filtrado:any;

public traertodos(): Observable<Jugador[]> {
  this.jugadorColeccion=this.afs.collection<Jugador>('jugadores');
  return this.jugadores=this.jugadorColeccion.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.data() as Jugador;
      data.idUsuario = action.payload.doc.id; 
       return data;
     });
   }));
}

public Registrar(jugador:Jugador): Promise<any> {

  this.jugadorColeccion=this.afs.collection<Jugador>('jugadores');
  return new Promise((resolve, reject) => {

  this.jugadorColeccion.add(jugador).then(result => {
    resolve(true);
    }).catch(err => {
      reject(false);
    });
  
  })
}


}
