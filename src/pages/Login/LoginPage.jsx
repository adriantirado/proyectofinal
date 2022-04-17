import React from 'react';
import background from '../../assets/images/fotos.png';
import Loginformik from '../Login/Views/LoginFormik';
import { Box,Img} from '@chakra-ui/react';

const LoginPage = () => {
 
  return (
    <Box overflowX='hidden' overflowY='hidden'>
    
    <Loginformik></Loginformik>
    <Img src={background} marginLeft={530} height='99vh' width='120vh'  marginTop='-500px'></Img>
    </Box>
  
  
  );
}

export default LoginPage;