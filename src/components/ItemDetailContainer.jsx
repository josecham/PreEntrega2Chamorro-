import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import { SimpleGrid } from '@chakra-ui/react'

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
      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        {
         product.map((p) =>{
          return(
            <ItemDetail key={p.id} product = {p}/>
          )
         }) 
          
      }
         </SimpleGrid>  
        </>   
      );
    };
    
  
    
  export default ItemDetailContainer