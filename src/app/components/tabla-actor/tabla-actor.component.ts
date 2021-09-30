import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  
  @Input() actores:any
  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() { }

  paisClick(actor: any){
    this.event.emit(actor);
  }

  ngOnInit(): void {
  }

}
