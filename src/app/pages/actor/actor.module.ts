import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { ActorComponent } from './actor.component';
import { TablaPaisesComponent } from './../../components/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';   

@NgModule({
  declarations: [
    ActorAltaComponent,
    ActorListadoComponent,
    ActorComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ActorModule { }
