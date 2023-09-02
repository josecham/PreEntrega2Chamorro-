import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Image, Button, ButtonGroup } from '@chakra-ui/react';
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {
  return (
    <>
    <div>
      
    
      <Card maxW='sm'>
      <Image src= {producto.image}
      borderRadius='lg'/>
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
        
        <CardFooter>
        
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Detalle
          </Button>
          
        </ButtonGroup>
        <ItemCount/>
        </CardFooter>
       
      </Card>
      
      </div>
      </>
    );
  };
  
 
  


export default ItemDetail