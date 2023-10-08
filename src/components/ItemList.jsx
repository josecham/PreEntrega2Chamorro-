import React from 'react'
import Item from './Item'
import { SimpleGrid } from '@chakra-ui/react'

const ItemList = ({product}) => {
  
  return (
    <>
    <SimpleGrid columns={[2, null, 3]} spacing='40px' className='grid'>
     
    {product.map((p) => {
      return(
        <Item key={p.id} producto = {p}/>
      )
    })
  }
  
  </SimpleGrid>  
      </>
  )
}

export default React.memo(ItemList)