import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Image, Button, ButtonGroup } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {
  return (
    <>
    <div  className="item-detail titulo">
      
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <Card maxW='sm'>
      <Image src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt={producto.title} />
        <CardBody>
          <Stack spacing="1rem">
            <Heading as="h2" size="md">
            {producto.title}
            </Heading>
            <Text>{producto.description}</Text>
            <Text className="precio">Precio: ${producto.price}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <ItemCount/>
        <CardFooter>
        
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Detalle
          </Button>
          
        </ButtonGroup>
        
        </CardFooter>
       
      </Card>
      </Grid>
      </div>
      </>
    );
  };
  
 
  


export default ItemDetail