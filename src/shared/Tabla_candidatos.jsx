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
    Img,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,FormControl,FormLabel, Input, ModalFooter, Select} from '@chakra-ui/react'
    
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";
import{BiSort} from "@react-icons/all-files/bi/BiSort";

import React from 'react'

export default function Tabla_candidatos() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  
  return (
    <>
    <Flex direction="column" gap='20px' marginBottom='450px' w='100%'>
    <Flex align="center" w="100%" justify="space-between">
    <Text fontWeight="bold" marginLeft='20px'>Candidatos</Text>
    <Button size="md" marginLeft="600px" onClick={onOpen}>Añadir alumnos</Button>
    </Flex>
  
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size='6xl'
    >
    <ModalOverlay></ModalOverlay>
     
      <ModalContent >
        <ModalHeader >Nuevo Candidato</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='flex' >
        
        <Flex direction='column'>
          <FormControl>
            <FormLabel>Nombre y Apellidos</FormLabel>
            <Input ref={initialRef} placeholder='Ej:Juan Perez Lorca' height='40px' width='524px' />
          </FormControl>
         
          <Flex direction='row'>
          <FormControl mt={4} >
            <FormLabel>Pais</FormLabel>
            <Select  width='247px' placeholder='Elige un pais'></Select>
          </FormControl>
          <FormControl mt={4} >
            <FormLabel>Cuidad</FormLabel>
            <Select width='247px' placeholder='Elige una cuidad'></Select>
          </FormControl>
          </Flex>
          <Flex direction='row'>
          <FormControl mt={4}>
            <FormLabel>Nº Telefono</FormLabel>
            <Input placeholder='Ej: +34 655 47 79 02' width='247px' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Ej: use@mail.com' width='247px'></Input>
          </FormControl>
          </Flex>
          <Flex direction='row'>
          <FormControl mt={4} >
            <FormLabel>Presencialidad</FormLabel>
            <Select  width='247px' placeholder='Elige una opcion'></Select>
          </FormControl>
          <FormControl mt={4} >
            <FormLabel>Traslado</FormLabel>
            <Select width='247px' placeholder='Elige una opcion'></Select>
          </FormControl>
          </Flex>
          <FormControl mt={4}>
            <FormLabel>Perfil Linkedin</FormLabel>
            <Input placeholder='Ej: use@mail.com' width='524px'></Input>
          </FormControl>
          </Flex>
          <Flex direction='column'>
          hola

          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
       
      </ModalContent>
      
    </Modal>

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
    
    </>

  )
}
