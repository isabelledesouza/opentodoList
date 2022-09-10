import React from 'react'
import {Contacto} from "../../models/contacto.class"
import {CONECTADO} from "../../models/conectado.boleana.js";
import ContactoComponent from "./Contacto";







const Disponible = () => {
    const defaultContacto = new Contacto ("Isa", "Souza", "isabelle.cristine19@gmail.com", CONECTADO.CONECTADO)
    return (
    

    <div>
      <ContactoComponent contacto= {defaultContacto}></ContactoComponent>
    </div>
  )
}

export default Disponible
