import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from "../../models/contacto.class"





const ContactoComponent = ({contacto}) => {
  
  
    return (
    <div>
      <div>
        <p>Nombre: {contacto.nombre}</p>
        <p>Apellido: {contacto.apellido}</p>
        <p>Email:{contacto.email}</p>
        <p>Conectado:{contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}</p>
      </div>
    </div>
  )
}
ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
    }
export default ContactoComponent
