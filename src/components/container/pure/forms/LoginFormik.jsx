import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Checkbox, color, Container, Flex, FormControl, FormLabel, HStack, Input,Text } from '@chakra-ui/react';
import { useNavigate,useHistory} from 'react-router-dom';
const loginSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Loginformik = () => {
  const initialCredentials = {
    email:'',
    password:'',
  };
  let navigate=useNavigate();
  

  return (
    <Formik
      // *** Initial values that the form will take
      initialValues={initialCredentials}
      // *** Yup Validation Schema ***
      validationSchema={loginSchema}
      // ** onSubmit Event
      onSubmit={ async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    // We save the data in the localstorage
                    await localStorage.setItem('credentials', values);
                   navigate('/dashboard',{replace:false});
      }}
    >
      {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur  }) => (
        <Form>
          <Flex paddingLeft={70} paddingTop={120} fontSize={24} ><Text>OpenBootcamp </Text><Text color='#75E6DA'><b>| Alumnos</b></Text></Flex>
          <FormControl paddingLeft={70}  paddingTop={50}>
            <FormLabel htmlFor='email'>  <b>Email</b></FormLabel>
            <Input name='email' rounded='none'  w='500px' variant='filled' id='email' type='email' placeholder='Introduce tu correo'  />
            
           </FormControl>
           <FormControl paddingLeft={70}  paddingTop={30} >
            <FormLabel htmlFor='password'>  <b>Contraseña</b></FormLabel>
            <Input name='password' variant='filled' w='500px'  id='password' type='password' placeholder='Introduce tu contraseña'  />
            </FormControl>
         <HStack w='570px'justify='space-between' paddingTop={10}>
         <Checkbox paddingLeft={70}>Recuerdame</Checkbox>
         <Button variant='link' colorScheme='blue'>He olvidado la contraseña</Button>
         </HStack>
        <Button type='submit'>Iniciar sesion</Button>
         
        
        </Form>
      )}
    </Formik>
  );
};
export default Loginformik;
