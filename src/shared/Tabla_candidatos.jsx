import { Flex, Text,Button,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Icon,
    Img} from '@chakra-ui/react'
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";
import{BiSort} from "@react-icons/all-files/bi/BiSort";
import React from 'react'

export default function Tabla_candidatos() {
  return (
    <Flex direction="column" gap='20px' marginBottom='450px' w='100%'>
    <Flex align="center" w="100%" justify="space-between">
    <Text fontWeight="bold" marginLeft='20px'>Candidatos</Text>
    <Button size="md" marginLeft="600px" >
      Añadir alumnos
    </Button>
    </Flex>
    

    <TableContainer >
    <Table>
                <Thead>
                    <Tr>
                        <Th >Nombre <Icon as={BiSort}></Icon></Th>
                        <Th>Ubicacion <Icon as={BiSort}></Icon></Th>
                        <Th>Telefono <Icon as={BiSort}></Icon></Th>
                        <Th>Tecnologias <Icon as={BiSort}></Icon></Th>
                        <Th>Estado <Icon as={BiSort}></Icon></Th>      
                    </Tr>
                </Thead>
                <Tbody>

               </Tbody>
               
            </Table>
          
      
    </TableContainer>
          
    </Flex>
    
    

  )
}
