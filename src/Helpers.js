//no es un export default por lo tanto en el componente que se vaya a usar
//esta función debe importarse como import {RevisarPresupuesto} from '.....'
export const RevisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if((presupuesto/4) > restante){
        clase='alert alert-danger';
    } else if ((presupuesto/2)> restante){
        clase='alert alert-warning';
    }else{
        clase='alert alert-success';
    }

    return clase
}