import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, actualizaGasto}) => {

    //crear los states de los gastos

    const [nombregasto, actualizargasto] =useState("");
    const [cantidad, actualizarCantidad] =  useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();


        //validar el gasto
        if (cantidad < 1 || isNaN(cantidad) || nombregasto.trim() === '')
        {
            guardarError(true);
            return;
        }


        //construir el gasto
        const gasto = {
            nombregasto,
            cantidad,
            id:shortid.generate(),
        }

        //pasarlo al componente principal para que se visualice
        guardarGasto(gasto);
        actualizaGasto(true);

        //resetear el formulario
        actualizargasto('');
        actualizarCantidad(0);
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Escribe tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange= {e => actualizargasto(e.target.value)}
                    value={nombregasto}
                />
            </div>

            <div className="campo">
                <label>Precio</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange ={e => actualizarCantidad(parseInt(e.target.value))}
                    value={cantidad}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>

      );
}

Formulario.propTypes={
    guardarGasto: PropTypes.func.isRequired,
    actualizaGasto: PropTypes.func.isRequired,
}
 
export default Formulario;