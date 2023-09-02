import React from 'react'
import Item from './Item'
import { Grid } from '@chakra-ui/react'

const ItemList = ({product}) => {
  return (
    <div className="item-list"> 
   <Grid templateColumns="repeat(3, 1fr)" gap={4}>{
    product.map((p) => {
      return(
        <Item producto = {p}/>
      )
    })
  }
      </Grid>
      </div>
  )
}

export default ItemList