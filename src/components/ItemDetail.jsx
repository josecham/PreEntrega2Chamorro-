import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Image, Button } from '@chakra-ui/react';



const ItemDetail = ({producto}) => {
  return (
<>
<Card maxW='sm'>
      <Image src= 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'alt={producto.nombre} />
      <CardBody>
        <Stack spacing="1rem">
          <Heading as="h2" size="md">
          {producto.nombre}
          </Heading>
          <Text>{producto.descripcion}</Text>
          <Text className="precio">Precio: ${producto.precio}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Detalle
          </Button>
        </ButtonGroup>
        <ItemCount/>
      </CardFooter>
    </Card>
 
    
    </>
  )
}

export default ItemDetail