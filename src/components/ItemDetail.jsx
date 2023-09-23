/*import { Link } from 'react-router-dom';
import { useContext, useState, useEffect} from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import {CartProvider} from '../context/CartProvider';
import Loader from './Loader';
const ItemDetail = ({ product }) => {
  console.log('producto en ItemDetail:', product);
  
  const [quantityAdded, setQuantityAdded] = useState(0)
  const [Loader, setLoading] = useState(true)

  const {addItem} = useContext(CartProvider)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const { id, nombre, descripcion, precio } = product;

    const item = {
      id, nombre, descripcion, precio
    }

    addItem(item, quantity)
  }


  useEffect(() => {
    setTimeout(()=> {
    setLoading(false)
    },1500)
    }, [])

  
    if(Loader){
      return <Loader/>
    }


  return (
    <>
    
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
        <Text className="text">
        {product.descripcion}
        </Text>
        <Text color='blue.600' fontSize='2xl'  
        className="precio">
        ${product.precio}
        </Text>
      </Stack>
    </CardBody>
    
    <CardFooter>
    <ItemCount/>
      
    </CardFooter>
    <>
    
    {
                quantityAdded > 0 ? (<Link to={"/cart"}> <button className='bot'> Terminar Compra</button></Link>)
                  : (<ItemCount initial={1} onAdd={handleOnAdd} />)
              }
    </>
  </Card>
  
  </div>
  </>
    )
  } 
   
  
  
  export default ItemDetail
  */
  import React, { useContext } from 'react'
  import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
  import ItemCount from './ItemCount'
  import { useState } from "react"
  import { Link } from 'react-router-dom'
  import Loader from './Loader'
  
  
  const ItemDetail = ({ product }) => {
    console.log('producto en ItemDetail:', product);
    /*
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [loading, setLoading] = useState(true)
  
    const {addItem} = useContext(CartContext)
    const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)
  
      const { id, nombre, description, price } = productos;
  
      const item = {
        id, nombre, description, price
      }
  
      addItem(item, quantity)
    }
  
  
    useEffect(() => {
      setTimeout(()=> {
      setLoading(false)
      },1500)
      }, [])
  
    
      if(Loader){
        return <Loader/>
      }
  
  */
    return (
      <>
      
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
          <Text className="text">
          {product.descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'  
          className="precio">
          ${product.precio}
          </Text>
        </Stack>
      </CardBody>
      
      <CardFooter>
      <ItemCount/>
        
      </CardFooter>
      <>
      <Button as={Link} to="/cart" className='bot'>Terminar Compra</Button>
      
      </>
    </Card>
    
    </div>
    </>
      )
    } 
     
    
    
    export default ItemDetail
    