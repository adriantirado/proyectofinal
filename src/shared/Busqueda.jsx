import React,{useState} from 'react'
import {
    Badge,
    Checkbox,
    CheckboxGroup,
    CloseButton,
    Flex,
    Icon,
    Stack,
    Text,
  } from "@chakra-ui/react";
import { FiTrash2 } from "@react-icons/all-files/fi/FiTrash2";
import Select from "react-select";
export default function Filtros() {
    const tecno = [
        { value: "htmlycss", label: "HTML&CSS " },
        { value: "react", label: "REACT " },
        { value: "angular", label: "ANGULAR " },
        { value: "javascript", label: "JAVASCRIPT " },
        { value: "php", label: "PHP " },
        { value: "python", label: "PYTHON " },
      ];
      const [result, setresult] = useState([]);
  const ddlHandler = (e) => {
    setresult([...result, e.label]);
  };
  function removeItem(indexToRemove) {
    const updatedItems = [...result];
    updatedItems.splice(indexToRemove, 1);

    return setresult(updatedItems);
  }
  return (
    <Flex w="100%" marginTop="15px" gap="10px" direction="column">
    <Flex w="100%" justify="space-between" marginTop='15px'>
      <Text fontWeight="bold">Filtro de busqueda </Text>
      <Icon as={FiTrash2} color="#32D4A4" />
    </Flex>
    <Text fontWeight="bold">Tecnologias</Text>
    <Select
      options={tecno}
      value={result}
      placeholder="Escribe para buscar..."
      onChange={ddlHandler}
    >
      {" "}
    </Select>
    <Stack direction="row">
      {result.map((valor) => (
        <Badge display="flex">
          {valor}
          <CloseButton onClick={removeItem} size="sm" />
        </Badge>
      ))}
    </Stack>
    <Text fontWeight="bold">Pais</Text>
    <Select></Select>
    <Text fontWeight="bold">Ciudades</Text>
    <Select></Select>
    <Text fontWeight="bold">Presencial/a distancia</Text>
    <CheckboxGroup
    >
      <Stack>
        <Checkbox value="pre">Presencial</Checkbox>
        <Checkbox value="remo">En remeoto</Checkbox>
      </Stack>
    </CheckboxGroup>
    <Text fontWeight="bold">Posibilidad de traspaso</Text>
    <CheckboxGroup>
      <Stack>
        <Checkbox value="si">Si</Checkbox>
        <Checkbox value="no">No</Checkbox>
      </Stack>
    </CheckboxGroup>
    <Text fontWeight="bold">Estado</Text>
    <CheckboxGroup>
      <Stack>
        <Checkbox value="contratado">Contratado</Checkbox>
        <Checkbox value="Pendiente de ofertas">Pendiente de ofertas</Checkbox>
        <Checkbox value="Preselecionado">Preselecionado</Checkbox>
      </Stack>
    </CheckboxGroup>
  </Flex>
  )
}
