import React,{useState} from 'react';
import Candidatos from './forms/Candidatos';
import { user } from '../../../models/user.class';
import { ESTADOS } from '../../../models/estados.enum';

const Tablealum = () => {
    
    const defaultCandidato1 = new user('Juan', 'Malaga', '+34 123 45 67 89', 'React', ESTADOS.PDTE_OFERTAS);
    const defaultCandidato2 = new user('Pepe', 'Madrid', '+34 321 45 67 89', 'HTML', ESTADOS.PDTE_OFERTAS);

    //Estado del componente
    const [candidatos, setcandidatos] = useState([defaultCandidato1, defaultCandidato2]);


    return (
       
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Ubicacion</th>
                        <th scope='col'>Telefono</th>
                        <th scope='col'>Tecnologias</th>
                        <th scope='col'>Estado</th>      
                    </tr>
                </thead>
                <tbody>
                { candidatos.map((candi, index) => {
                        return (
                                <Candidatos
                                    key={index} 
                                    candi={candi}
                                    
                                >
                                </Candidatos>
                            )
                }
                )}            
               </tbody>
               
            </table>
          
      
    );
}

export default Tablealum;
