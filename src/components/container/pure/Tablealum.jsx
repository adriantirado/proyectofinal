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
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  Spacer,
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
   { value: 'python', label: 'PYTHON' }
  ];

  return (
    <Flex margin="0" padding="0" >
      {/*MEnu*/}
     
      <Flex backgroundColor="#08152e" height="100vh" width="250px" >
        <Flex marginBottom="500px">
          {" "}
          <Menudatos nombre="Ofertas" icon={<FaBriefcase />} link="/ofer" />
        </Flex>
        <Flex marginLeft="-108px" marginBottom="420px">
          <Menudatos nombre="Candidatos" icon={<FiUsers />} link="/ofer" />{" "}
        </Flex>
        <Flex marginLeft="-138px" marginBottom="340px">
          <Menudatos nombre="Clientes" icon={<BiBuildings />} link="/ofer" />
        </Flex>
        <Flex marginLeft="-112px" marginBottom="260px">
          <Menudatos nombre="Entrevistas" icon={<BiCalendar />} link="/ofer" />{" "}
        </Flex>
      </Flex>
     
      {/*Buscador por Jquery*/}
      <Flex marginLeft="50px" marginTop="20px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray.300" />}
          />
          <Input
            marginTop="-660px"
            variant="unstyled"
            type="text"
            name="buscador"
            id="buscador"
            placeholder="Buscar por Candidatos por Nombre, DNI, etc..."
            w="400px"
            size="sm"
          ></Input>
        </InputGroup>
        <Text marginLeft="80vh">Nombre</Text>
      </Flex>
     
      {/*Buscador por Jquery2*/}
      <Flex marginLeft="-1070px" marginTop="100px">
        {" "}
        <Text fontWeight="bold">Candidatos</Text>
      </Flex>
      <Flex marginLeft="30px" marginTop="100px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray.300" />}
          />
          <Input
            variant="filled"
            type="text"
            name="buscador2"
            id="buscador2"
            placeholder="Buscar por Nombre, Email o Palabra clave"
            w="313px"
            size="sm"
          ></Input>
        </InputGroup>

        <Button
          marginLeft="145px"
          leftIcon={<IoMdAdd />}
          variant="outline"
          w="250px"
          type="button"
        >
          Añadir alumnos
        </Button>
      </Flex>
      <Flex marginTop='100px' marginLeft='280px'>
      <Text fontWeight='bold' marginTop='-5px' marginLeft='-240px'>Filtros de busqueda</Text><Spacer></Spacer>
        <FiTrash2  ></FiTrash2>
      </Flex>
      <Flex marginTop='180px' marginLeft='-240px' >
      <Select options={tecno} placeholder='Escribe para buscar...' />
      
      </Flex>
      

    </Flex>
  );
};

export default Tablealum;
