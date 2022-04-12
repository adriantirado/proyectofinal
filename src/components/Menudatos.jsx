import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';


const Menudatos = (props) => {
    let navigate = useNavigate();
    return (
       
           <Flex style={{color: 'white'}} align='center' marginLeft='20px'>
           <Text>{props.icon}</Text> <Text marginLeft='20px'>{props.nombre}</Text></Flex>
    
       
    );
};


Menudatos.propTypes = {
nombre:PropTypes.string,
icon:PropTypes.any,
link:PropTypes.string

};


export default Menudatos;

