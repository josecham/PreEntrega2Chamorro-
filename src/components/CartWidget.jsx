import React from 'react'
import { Box, Divider, Flex } from "@chakra-ui/react"

const CartWidget = () => {
  
  //contador
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
        
      <p>2</p>
      
      </Box>
      </Flex>

    </div>
    </>
  )
}

export default CartWidget