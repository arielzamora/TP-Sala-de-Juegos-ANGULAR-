import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';


//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {

  }

  registeruser(email: string, pass: string){
    return new Promise((resolve,reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject (err));
    })
  }

  login(email: string, pass: string){
    return new Promise((resolve,reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject (err));
    })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  //Obtiene los datos del usuario en caso de que esté logueado. 
  getAuth(){
    return this.afAuth.authState.pipe( auth => auth );
  }

  updateProfile(newName:string, photoURL: string){    
    return this.afAuth.auth.currentUser.updateProfile({
      displayName: newName,
      photoURL: photoURL
    });
  }





}
