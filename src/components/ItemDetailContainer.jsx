import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import { Grid } from '@chakra-ui/react'

const ItemDetailContainer = () => {
  
  const getProducts = async () => {
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()
   
    return data
  }
  const [product, setProduct] = useState ([])
  

  useEffect(() => {
    getProducts().then((product) => setProduct(product))

  },[]
  )


  return (
      <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {
         product.map((p) =>{
          return(
            <ItemDetail product = {p}/>
          )
         }) 
          
      }
           </Grid> 
        </>   
      );
    };
    
  
    
  export default ItemDetailContainer