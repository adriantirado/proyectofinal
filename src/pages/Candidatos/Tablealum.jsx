import React, { useState } from "react";
import Candidatos from "../../shared/Candidatos";
import { user } from "../../modals/user.class";
import { ESTADOS } from "../../modals/estados.enum";
import {Flex} from "@chakra-ui/react";
import Sidebar from "../../shared/Sidebar";
import Header from "../../shared/Header";
import Tabla from "../../shared/Tabla_candidatos";
import Busqueda from "../../shared/Busqueda";
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

  return (
    <Flex margin="0" padding="0">
      {/*MEnu*/}
      {/*Sidebar*/}
      <Sidebar></Sidebar>
      {/*Header*/}
      <Flex p="20px" direction="column" h="100%" w="100%">
        <Header></Header>
        <Flex
          marginTop="10px"
          w="100%"
          gap="50px"
          justify="space-between"
          align="center"
        >
          {/*Tabla de alumnos*/}
          <Tabla></Tabla>
          {/*Filtros*/}
          <Busqueda></Busqueda>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Tablealum;
