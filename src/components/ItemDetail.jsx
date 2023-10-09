import React, { useContext } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useState } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'
import { SimpleGrid } from '@chakra-ui/react'


const ItemDetail = ({ product }) => {
  console.log('producto en ItemDetail:', product);
  const {carrito, setCarrito, contador} = useContext (CartContext)
  const buyProducts = () => {
    setCarrito([...carrito, {...product, cantidad:contador}])



}
  return (
    <>
    
    <SimpleGrid  spacing={1} minChildWidth="1100px">
    <div className="titulo">
   
      <Card maxW='sm'>
    <CardBody>
      <Image
         src={product.imagen}
         borderRadius='lg'
         className="foto titulo"
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{product.nombre}</Heading>
        <Text className="description">
        {product.descripcion}
        </Text>
        <Text color='blue.600' fontSize='2xl'  
        className="precio">
        ${product.precio}
        </Text>
      </Stack>
    </CardBody>
    
    <CardFooter>
    <ItemCount  product={product}/>
      
    </CardFooter>
    <>
    <Button as={Link} onClick={() => buyProducts(product)} to="/" className='añadir links'>Añadir al carrito</Button>
    </>
  </Card>
  
  </div>
  </SimpleGrid>
  
  </>
    )
  } 
   
  
  
  export default ItemDetail
  