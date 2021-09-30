import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActoresService } from 'src/app/services/actores.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  paises: any;
  paisSeleccionado = "";

  form: FormGroup;

  constructor(private paisesS: PaisesService,formBuilder: FormBuilder, private actorS: ActoresService) { 

    this.form = formBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      pais: ['',Validators.required],
    })  

    this.paisesS.getPaises().subscribe((data)=>{
      this.paises = data
      console.log(this.paises);
    })
  }

  getPaisEvent(event:any){
    this.form.get('pais')?.setValue(event);
  }

  altaActor(){
    let actor = {
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      pais: this.form.get('pais')?.value
    }    
    this.actorS.setActor(actor)
    .then(()=>{
      this.form.reset();
      /* 
      this.form.get('nombre')?.reset();
      this.form.get('apellido')?.reset();
      this.form.get('pais')?.reset(); */
    })
    .catch(()=>{

    });
  }

  ngOnInit(): void {
  }

}
