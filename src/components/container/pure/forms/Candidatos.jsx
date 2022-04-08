import React from 'react';
import PropTypes from 'prop-types';
import { user } from '../../../../models/user.class';
import { ESTADOS } from '../../../../models/estados.enum';
import 'bootstrap/dist/css/bootstrap.css';
const Candidatos = (user) => {

    function candidatosEstados() {
        switch (user.candi.estado) {
            case ESTADOS.PRESELECCIONADO:
                return (
                    <span className='badge bg-primary'>
                        {user.candi.estado}
                    </span>
                );

            case ESTADOS.CONTRATADO:
                return (
                    <span className='badge bg-success'>
                        {user.candi.estado}
                    </span>
                );

            case ESTADOS.PDTE_OFERTAS:
                return (
                    <span className='badge bg-info'>
                        {user.candi.estado}
                    </span>
                );

            default:
                break;
        }
    }


    return (
        <tr className='fw-normal'>
            <th >
                <span className='ms-2'>{user.candi.nombre}</span>
            </th>
            <td className='align-middle'>
                <span>{user.candi.ubicacion}</span>
            </td>
            <td className='align-middle'>
                <span>{user.candi.telefono}</span>
            </td>
            <td className='align-middle'>
                <span>{user.candi.tecnologias}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {candidatosEstados()}
            </td>
        </tr>
    )
}

Candidatos.propTypes = {
    user: PropTypes.instanceOf(user),
};


export default Candidatos;