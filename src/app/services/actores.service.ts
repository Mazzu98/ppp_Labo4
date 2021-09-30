import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private store: AngularFirestore) { }

  getActores(){
    return this.store.collection('actores').valueChanges();
  }

  setActor(actor:any){
    return this.store.collection('actores').add(actor);
  }

}
