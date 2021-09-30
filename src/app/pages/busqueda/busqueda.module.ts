import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { BusquedaComponent } from './busqueda.component';
import { DetallePeliculaComponent } from 'src/app/components/detalle-pelicula/detalle-pelicula.component';


@NgModule({
  declarations: [BusquedaComponent,
    DetallePeliculaComponent,],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    SharedComponentsModule
  ]
})
export class BusquedaModule { }
