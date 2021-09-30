import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPeliculaComponent } from 'src/app/components/tabla-pelicula/tabla-pelicula.component';


@NgModule({
  declarations: [TablaPeliculaComponent],
  exports:[TablaPeliculaComponent],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
