import { Flex, Text,Button,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer} from '@chakra-ui/react'
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";
import React from 'react'

export default function Tabla_candidatos() {
  return (
    <Flex align="center" w="100%" marginBottom='550px' justify="space-between" >
    <Text fontWeight="bold">Candidatos</Text>
    <Button size="md" marginLeft="600px" >
      Añadir alumnos
    </Button>
    <TableContainer>
    <Table>
                <Thead>
                    <Tr>
                        <Th>Nombre</Th>
                        <Th>Ubicacion</Th>
                        <Th>Telefono</Th>
                        <Th>Tecnologias</Th>
                        <Th>Estado</Th>      
                    </Tr>
                </Thead>
                <Tbody>

               </Tbody>
               
            </Table>
          
      
    </TableContainer>
          
    </Flex>
    
    

  )
}
