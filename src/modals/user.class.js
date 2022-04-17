import { ESTADOS } from "./estados.enum";

export class user{
    nombre='';
    ubicacion='';
    telefono='';
    tecnologias='';
    estado=ESTADOS.PDTE_OFERTAS;
    
    constructor (nombre,ubicacion,telefono,tecnologias,estado){
        this.nombre=nombre;
        this.ubicacion=ubicacion;
        this.telefono=telefono;
        this.tecnologias=tecnologias;
        this.estado=estado;
    }
    
}