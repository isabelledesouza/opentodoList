import React, { useState } from 'react';

const Ejemplo1 = () => {
    const valorInicial = 0; 


    const personaInicial = {
        nombre: "Isabelle", 
        email: "isabelle.cristine19@gmail.com"
    }

    const [contador, setContador] = useState(valorInicial); 
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContator () {
        setContador(contador + 1); 
    }

    function actualizarPersona( ) {
        setPersona({
            nombre: "Carlos",
            email: "carlosAntonio@gmail.com"
        })
    }
    return (
        <div>
            <h1>******Ejemplo de useState******</h1>
            <h2>Contador {contador}</h2>
            <h3>Datos de la persona</h3>
            <h3>Nombre: {persona.nombre}</h3>
            <h4>Email: {persona.email}</h4>
            <button onClick={incrementarContator}>Incrementar Persona</button>
            <button onClick={actualizarPersona}>actualizar Persona</button>
        </div>
    )


}

export default Ejemplo1