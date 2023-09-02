import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {
  return (
    <>
    <div>
      
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <Card maxW='sm'>
      <Image src={producto.image} />
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