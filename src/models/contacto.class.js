import { CONECTADO } from "./conectado.boleana";




export class Contacto {
    nombre =" ";
    apellido = "";
    email= "";
    conectado = CONECTADO.CONECTADO;
    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido= apellido;
        this.email = email; 
        this.conectado = conectado;
    }

}