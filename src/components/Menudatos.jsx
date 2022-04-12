import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';


const Menudatos = (props) => {
    let navigate = useNavigate();
    return (
       
           <Flex align='center' color='white' gap='10px' onClick={()=>navigate(`/${props.link}`)} cursor='pointer'>
            <Icon as={props.icon} boxSize='18px'/><Box>{props.nombre}</Box>
           </Flex>
    
       
    );
};


Menudatos.propTypes = {
nombre:PropTypes.string,
icon:PropTypes.any,
link:PropTypes.string

};


export default Menudatos;

