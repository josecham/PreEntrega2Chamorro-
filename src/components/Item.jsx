import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, ButtonGroup, Button,Text } from '@chakra-ui/react'



const Item = ({producto}) => {
  return (
  <>
   <div className="titulo" >
   
   
  <Card maxW='sm'>
  <CardBody>
    
    <Image
      src={producto.image}
      borderRadius='lg'
      className="foto"
    />
    
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.title}</Heading>
    </Stack>
  </CardBody>
 
  <CardFooter>
    <ButtonGroup spacing='2' >
      <Button variant='solid' colorScheme='blue' className="botones">
        Detalle
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


</div>
</>
  )
} 

export default Item