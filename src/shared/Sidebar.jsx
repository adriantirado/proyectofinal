import {
    Badge,
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    CloseButton,
    Container,
    Divider,
    Flex,
    Icon,
    Img,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    Spacer,
    Stack,
    Text,
  } from "@chakra-ui/react";
import React from 'react';
import logo from "../assets/images/logo.png"
import Menudatos from "../shared/Menudatos";
import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase";
import { FiUsers } from "@react-icons/all-files/fi/FiUsers";
import { BiBuildings } from "@react-icons/all-files/bi/BiBuildings";
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar";

const Sidebar = () => {
    const sidebar = [
        { nombre: "Ofertas", icon: FaBriefcase, link: "ofertas" },
        { nombre: "Candidatos", icon: FiUsers, link: "candidatos" },
        { nombre: "CLientes", icon: BiBuildings, link: "clientes" },
        { nombre: "Entrevistas", icon: BiCalendar, link: "entrevista" },
      ];
    return (
        <Flex
        backgroundColor="#08152e"
        height="100vh"
        width="250px"
        p="12px"
        direction="column"
      >
      <Img src={logo} marginTop='10px'></Img>
        <Flex direction="column" gap="20px" paddingTop="40px">
        
          {sidebar.map((item, i) => (
            <Menudatos
              key={i}
              nombre={item.nombre}
              icon={item.icon}
              link={item.link}
            ></Menudatos>
          ))}
        </Flex>
      </Flex>
    );
}

export default Sidebar;
