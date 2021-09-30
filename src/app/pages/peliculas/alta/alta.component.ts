import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActoresService } from 'src/app/services/actores.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  form;
  actores:any;
  
  constructor(formBuilder: FormBuilder,private actoresS: ActoresService, private storsgeS: StorageService) {
    this.form = formBuilder.group({
      nombre: ['',Validators.required],
      tipo:['',Validators.required],
      fecha_de_estreno: ['',Validators.required],
      cantidad_de_publico:['',Validators.required],
      foto_de_la_pelicula: ['',Validators.required],
      actor:['', Validators.required],
    })  
    this.actoresS.getActores().subscribe((actores:any)=>{
      this.actores = actores;
    });
  }

  ngOnInit(): void {
  }

  getActorEvent(event:any){
    this.form.get('actor')?.setValue(event.nombre + ' ' + event.apellido);
  }

  altaPelicula(){
    this.storsgeS.setFilm(this.form.value);
    this.form.reset();
  }

}
