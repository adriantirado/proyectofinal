import React, { useState } from "react";
import Candidatos from "./forms/Candidatos";
import { user } from "../../../models/user.class";
import { ESTADOS } from "../../../models/estados.enum";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Menudatos from "../../Menudatos";
import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase";
import { FiUsers } from "@react-icons/all-files/fi/FiUsers";
import { BiBuildings } from "@react-icons/all-files/bi/BiBuildings";
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";
import {FiTrash2} from "@react-icons/all-files/fi/FiTrash2";
import Select from 'react-select'
const Tablealum = () => {
  const defaultCandidato1 = new user(
    "Juan",
    "Malaga",
    "+34 123 45 67 89",
    "React",
    ESTADOS.PDTE_OFERTAS
  );
  const defaultCandidato2 = new user(
    "Pepe",
    "Madrid",
    "+34 321 45 67 89",
    "HTML",
    ESTADOS.PDTE_OFERTAS
  );

  //Estado del componente
  const [candidatos, setcandidatos] = useState([
    defaultCandidato1,
    defaultCandidato2,
  ]);
  const tecno = [
    { value: 'htmlycss', label: 'HTML&CSS' },
    { value: 'react', label: 'REACT' },
    { value: 'angular', label: 'ANGULAR' },
   { value: 'javascript', label: 'JAVASCRIPT' },
   { value: 'php', label: 'PHP' },
   { value: 'python', label: 'PYTHON' },
  ];
  const sidebar=[
    {nombre:"Ofertas", icon: FaBriefcase ,link:'ofertas'},
    {nombre:"Candidatos", icon:FiUsers, link:'candidatos'},
    {nombre:'CLientes', icon:BiBuildings, link:'clientes'},
    {nombre:'Entrevistas',icon:BiCalendar,link:'entrevista'}
  ]
  return (
    <Flex margin="0" padding="0" >
      {/*MEnu*/}
     
      <Flex backgroundColor="#08152e" height="100vh" width="250px" p='12px' gap='25px' direction='column'>
      <Flex direction='column' gap='20px' paddingTop='75px'>
        {sidebar.map((item,i)=>(
          <Menudatos key={i} nombre={item.nombre} icon={item.icon} link={item.link}></Menudatos>
        ))}
      </Flex>
      
      </Flex>
     
       {/*Buscador por Jquery*/}
       <Box px='20px'>
      
        <InputGroup >
       
        <InputLeftElement paddingTop='20px' pointerEvents="none" children={<Icon as={FiSearch} color="gray.300" />} variant="unstyled" />
        <Input paddingTop='20px' type="text" placeholder="Buscar por Candidatos por Nombre, DNI, etc..." w='400px' size='sm' border='none' />
        
         
        
      </InputGroup>
      <Flex  marginTop='75px'>
      <Text  px='20px'  fontWeight='bold'>Candidatos</Text>
      
      <InputGroup >
        <InputLeftElement  pointerEvents="none" children={<Icon as={FiSearch} color="gray.300" />}  />
        <Input  type="text" placeholder="Buscar por Candidatos por Nombre, DNI, etc..." w='350px' size='sm' border='none' variant="filled"  /> 
       
      </InputGroup>
      
     
      
      
      </Flex>
      <Flex px='350px' paddingTop='5px'>
        <Button  size='md'  width='100px'>Añadir alumnos</Button>
        </Flex>
       
    </Box>
      
        <Spacer></Spacer>
        <Flex paddingTop='20px' px='40px'>
          <Text>Nombre</Text>
        </Flex>
       
    </Flex>
  );
};

export default Tablealum;
