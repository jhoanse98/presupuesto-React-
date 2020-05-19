import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

//Definimos los valores de presupuesto y restante
//esos valores states se definen en app debido a que estos iran viajando entre componentes

  const [presupuesto, guardarPresupuesto] = useState(0); //presupuesto
  const [restante, guardarRestante] = useState(0); //restante

  //state para ya no visualizar las casillas de presupuesto una vez ya se haya establecido

  const[mostrarpresupuesto, actualizarPresupuesto] = useState(true) //true si aun no se ha marcado un presupuesto

  //state para visualizar los gastos que se crean en formulario

  const [gastos, actualizarGastos] = useState([])

  const[gasto, guardarGasto] = useState({}) //objeto con toda la información del gasto

  const [validagasto, actualizaGasto] =useState(false)
  //useEffect que actualiza rl valor restante

  useEffect(() => {
    if(validagasto){

      //agrega el nuevo gasto
      actualizarGastos([
        ...gastos,
        gasto
      ])

      //actualizamos el restante
      const presupuestoRestante = restante- gasto.cantidad;
      guardarRestante(presupuestoRestante);
      
      
      //validargasto pasarlo a false
      actualizaGasto(false)
    }
  }, [gasto, gastos, restante, validagasto]);
  
  

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarpresupuesto
        ?(
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPresupuesto={actualizarPresupuesto}
          />
        )
        :(
          <div className="row">
            <div className="one-half column">
              <Formulario 
                guardarGasto={guardarGasto}
                actualizaGasto={actualizaGasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos={gastos}
              />

              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}

        
      </div>
      
    </div>
  );
}

export default App;
