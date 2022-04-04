import React from 'react';
import PropTypes from 'prop-types';
import { user } from '../../../../models/user.class';
import { ESTADOS } from '../../../../models/estados.enum';

const Candidatos = ({user}) => {

    function candidatosEstados() {
        switch (user.estado) {
            case ESTADOS.PRESELECCIONADO:
                return(<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {user.estado}
                    </span>
                </h6>);

            case ESTADOS.CONTRATADO:
                return(<h6 className='mb-0'>
                    <span className='badge bg-success'>
                        {user.estado}
                    </span>
                </h6>);

            case ESTADOS.PDTE_OFERTAS:
                return(<h6 className='mb-0'>
                    <span className='badge bg-info'>
                        {user.estado}
                    </span>
                </h6>);
        
            default:
                break;
        }
    }
    

  return (
<tr className='fw-normal'>
    <th >
        <span className='ms-2'>{user.nombre}</span>
    </th>
    <td className='align-middle'>
        <span>{user.ubicacion}</span>
    </td>
    <td className='align-middle'>
        <span>{user.telefono}</span>
    </td>
    <td className='align-middle'>
        <span>{user.tecnologias}</span>
    </td>
    <td className='align-middle'>
        {/* Execution of function to return badge element */}
        {candidatosEstados()}
    </td>
</tr>
  )
}

Candidatos.propTypes = {
    user: PropTypes.instanceOf(user)
};


export default Candidatos;