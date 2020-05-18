import React, { Fragment, useState } from 'react';

const Pregunta = () => {

    // SE DEFINE LOS VALORES DE PRESUPUESTO

    const [cantidad, guardacantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //función que establece el presupuesto
    const definePresupuesto = e => {
        //console.log(e.target.value) //si el número aparece de color negro en el console del navegador, significa que lo esta leyendo como un string
        //console.log(parseInt(e.target.value)) //ahora el número aparece de color azul, por lo tanto es leído como un número
        guardacantidad(parseInt(e.target.value))
    
    }

    //función para agregar el presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }



        //si se pasa la validación 
        guardarError(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {/*se planea realizar un mensaje de error*/}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definePresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value='Definir presupuesto'
                />
            </form>
        </Fragment>
      );
}
 
export default Pregunta;