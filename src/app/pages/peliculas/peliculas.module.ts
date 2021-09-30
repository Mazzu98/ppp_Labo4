import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { PeliculasComponent } from './peliculas.component';
import { ReactiveFormsModule } from '@angular/forms';   
import { TablaActorComponent } from './../../components/tabla-actor/tabla-actor.component';

@NgModule({
  declarations: [
    AltaComponent,
    ListadoComponent,
    PeliculasComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ]
})
export class PeliculasModule { }
