import React from 'react';
import background from '../auth/fotos.png';
import Loginformik from '../../components/container/pure/forms/LoginFormik';
import { Box,Flex,Image, Img} from '@chakra-ui/react';

const LoginPage = () => {
 
  return (
    <Box>
    
    <Loginformik ></Loginformik>
    <Img src={background} marginLeft={530} height='99vh' width='120vh'  marginTop='-500px'></Img>
    </Box>
  
  
  );
}

export default LoginPage;