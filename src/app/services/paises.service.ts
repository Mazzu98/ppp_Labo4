import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private store: AngularFirestore,private http: HttpClient) { }

  getPaises(){
    return this.store.collection('paises').valueChanges();
  }
  
}
