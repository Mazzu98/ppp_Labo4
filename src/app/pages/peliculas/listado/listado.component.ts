import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas:any;

  constructor(private storage: StorageService) {
    this.storage.getFilms().subscribe((data)=>{
      this.peliculas = data;
     });
  }

  ngOnInit(): void {
  }

}
