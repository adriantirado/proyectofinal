import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Checkbox, color, Container, Divider, Flex, FormControl, FormLabel, HStack, Input,Text,Image} from '@chakra-ui/react';
import { useNavigate,useHistory} from 'react-router-dom';
const Loginformik = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Ingrese un email correcto').required('Email es obligatorio'),
    password: Yup.string().required('Contraseña es obligatoria'),
  });

  const initialCredentials = {
    email: '',
    password: '',
  };

  let navigate = useNavigate();

  const onSubmitForm =async (values) => {
    await new Promise((r) => setTimeout(r, 1000));
   // We save the data in the localstorage
    await localStorage.setItem('credentials', values);
    console.log(values);
    navigate('/dashboard');
  };

  return (
   
     
      <Formik initialValues={initialCredentials} validationSchema={loginSchema} onSubmit={onSubmitForm}  >
      
    {(formik) => {
      const { values } = formik;
      console.log(values);
      return (
        <Box>
          <Flex paddingLeft={70} paddingTop={120} fontSize={24}>
            <Text>OpenBootcamp </Text>
            <Text color="#75E6DA">
              <b>| Alumnos</b>
            </Text>
          </Flex>
          <Form>
            <Field name="email">
              {({ field, form}) => (
                <FormControl paddingLeft={70} paddingTop={50} >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" rounded='full' variant='filled'  w='400px' placeholder="Introduce tu correo" />
                  {form.touched.email && form.errors.email ? (<Text color='red' display='inline'>{form.errors.email}</Text>
                                        ): null}
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl  paddingLeft={70} paddingTop={30}>
                  <FormLabel htmlFor="password">Contraseña</FormLabel>
                  <Input {...field} id="password" type='password' rounded='full' w='400px' placeholder="Introduce tu contraseña" variant='filled'/>
                  {form.touched.password && form.errors.password ? (
                                            <Text color='red' display='inline'>{form.errors.password}</Text>
                                        ): null}
                </FormControl>

              )}
            </Field>
            <HStack w="460px" justify="space-between" paddingTop={10}>
              <Checkbox paddingLeft={70}>Recuerdame</Checkbox>
              <Button variant="link" colorScheme="blue">
                He olvidado la contraseña
              </Button>
            </HStack>
            <Button marginLeft={70} marginTop={19} w='400px' backgroundColor="#75E6DA" color="white" type="submit">Iniciar sesion</Button>
             
          </Form>
          </Box>
        
      );
    }}
  </Formik>
  
   
  

  );
};
export default Loginformik;