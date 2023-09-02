import React from 'react'
import Item from './Item'
import { Grid } from '@chakra-ui/react'

const ItemList = ({product}) => {
  return (
    <>
     <Grid templateColumns="repeat(3, 1fr)" gap={4}>
     
    {product.map((p) => {
      return(
        <Item producto = {p}/>
      )
    })
  }
  
  </Grid>
      </>
  )
}

export default ItemList