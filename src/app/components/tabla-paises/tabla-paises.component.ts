import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() paises:any
  @Output() event: EventEmitter<any> = new EventEmitter();
  constructor() { }

  paisClick(pais: string){
    this.event.emit(pais);
  }

  ngOnInit(): void {
  }

}
