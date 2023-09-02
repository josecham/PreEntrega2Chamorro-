import React from 'react'
import ItemCount from './ItemCount'
import { Grid } from '@chakra-ui/react';

const ItemDetail = (producto) => {
  return (
    <>
    <div className="item-detail">
      <Grid templateColumns="repeat(3, auto)" gap={4}> {/* Define la disposición de 3 columnas */}
        
      <Card maxW='sm'>
      <Image src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt={producto.nombre} />
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
          <ItemCount/>
        </CardFooter>
      </Card>
      </Grid>
      </div>
      </>
    );
  };

export default ItemDetail