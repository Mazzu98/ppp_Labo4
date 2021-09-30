import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from  } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  peliculas: any; 
  /*
    {
      id: 1,
      nombre: 'peli1',
      tipo: ['terror', 'comedia', 'amor' , 'otros'],
      fecha_de_estreno: '2012/03/15',
      cantidad_de_publico: 200,
      foto_de_la_pelicula: "url_peli"
    }
  */

  constructor(private http: HttpClient, private store: AngularFirestore) {
    
  }
  
  getFilms(){
    return this.store.collection('peliculas').valueChanges();
  }

  setFilm(pelicula:any){
    return this.store.collection('peliculas').add(pelicula);
  }
}
