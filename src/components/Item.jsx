import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react';

const Item = ({producto}) => {

  return (
    <Card maxW='sm'>
      <Image src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt={producto.nombre} />
      <CardBody>
        <Stack spacing="1rem">
          <Heading as="h2" size="md">
            {producto.nombre}
          </Heading>
          
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Detalle
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Item