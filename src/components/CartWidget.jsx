import React from 'react'
import { Box, Divider, Flex } from "@chakra-ui/react"
import { CartContext } from '../context/CartProvider'
import { useContext } from 'react'

const CartWidget = () => {
  const {totalContador} = useContext(CartContext)
  
  return (
    <>
    <div>
      <Flex>
        <Box>
        <span className="material-symbols-outlined carrito">
shopping_cart
</span>
      </Box>
      <Divider></Divider>
      <Box>
        
      <p className='totalcontador'>{totalContador}</p>
      
      </Box>
      </Flex>

    </div>
    </>
  )
}

export default CartWidget