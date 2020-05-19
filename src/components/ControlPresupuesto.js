import React, {Fragment} from 'react';
import {RevisarPresupuesto} from '../Helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => (
    <Fragment>
        <div className="alert alert-primary">
            Presupuesto: ${presupuesto}
        </div>
        <div className={RevisarPresupuesto(presupuesto, restante)}>
            restante: ${restante}
        </div>
    </Fragment>
);

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}
 
export default ControlPresupuesto;