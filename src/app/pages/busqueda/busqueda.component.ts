import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit, AfterViewInit {

  peliculas: any;
  peliculaActual: any;
  constructor(private storage: StorageService) { 
   this.storage.getFilms().subscribe((data)=>{
    console.log(data);
    this.peliculas = data;
    this.peliculaActual = this.peliculas[0];
   });
  }
  
  EventReceive(event:any){
    console.log(event);
    this.peliculaActual = event;
  }
  
  ngAfterViewInit(){
    console.log(this.peliculas);
  }



  ngOnInit(): void {
  }

}
