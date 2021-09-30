import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'bienvenido'},
  {path:'bienvenido', component: BienvenidoComponent},
  {path: 'peliculas', loadChildren: ()=> import('./pages/peliculas/peliculas.module').then(m=> m.PeliculasModule)},
  {path: 'busqueda', loadChildren: ()=> import('./pages/busqueda/busqueda.module').then(m=> m.BusquedaModule)},
  {path: 'actor', loadChildren: ()=> import('./pages/actor/actor.module').then(m=> m.ActorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
