import React from 'react'
import ItemDetail from './ItemDetail'
import { Grid } from '@chakra-ui/react'
import {useEffect, useState} from 'react'


const ItemDetailContainer = () => {
  
  const getProducts = async () => {
    const response = await flech ("https://fakestoreapi.com/products")
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
    
        <ItemDetail product={product}/>
  
       
       
      </Grid>
      </>
    )
  }
  export default ItemDetailContainer