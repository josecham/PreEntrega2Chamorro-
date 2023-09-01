import React from 'react'
import Item from './Item'
import { Grid } from '@chakra-ui/react'

const ItemList = ({productos}) => {
  return (
    <div className="item-list">
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>{
    productos.map((producto)  => {
      return(
        <Item producto = {producto}/>
      )
    })
      }</Grid>
      </div>
  )
}

export default ItemList