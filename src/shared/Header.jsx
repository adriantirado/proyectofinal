import React from 'react'
import {
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
export default function Header() {
  return (
    <Flex
    px="20px"
    w="100%"
    h="auto"
    justify="space-between"
    align="center"
  >
    {/*Buscador*/}
    <InputGroup size="sm">
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={FiSearch} color="gray.300" />}
        variant="unstyled"
      />
      <Input
        type="text"
        placeholder="Buscar por Candidatos por Nombre, DNI, etc..."
        w="400px"
        border="none"
      />
    </InputGroup>
    {/*Menu usuario*/}
    <Flex>Nombre</Flex>
  </Flex>
  )
}
