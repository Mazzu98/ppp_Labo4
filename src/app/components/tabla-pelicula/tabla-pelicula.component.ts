import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Input() peliculas : any;
  constructor() { }

  selectedEvent(id:any){
    this.selected.emit(id);
  }


  ngOnInit(): void {
  }

}
