export class Pelicula {

    id: number;
    nombre: string;
    tipo: string;
    fecha_de_estreno: string;
    cantidad_de_publico: number;
    foto_de_la_pelicula: string;

    constructor(id: number,nombre: string,tipo: string,fecha_de_estreno: string,cantidad_de_publico: number,foto_de_la_pelicula: string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fecha_de_estreno = fecha_de_estreno;
        this.cantidad_de_publico = cantidad_de_publico;
        this.foto_de_la_pelicula = foto_de_la_pelicula;
    }
      
}
