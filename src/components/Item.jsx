import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, ButtonGroup, Button,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  
  return (
  <>
  
   <div className="titulo" >
   
   
  <Card maxW='sm'>
  <CardBody>
    
    <Image
      src={producto.imagen}
      borderRadius='lg'
      className="foto"
    />
    
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.nombre}</Heading>
    </Stack>
  </CardBody>
 
  <CardFooter>
  
    <ButtonGroup spacing='2' >
    <Link to = {`/item/${producto.id}`}>
      <Button variant='solid' colorScheme='blue' className="botones">
        Detalle
      </Button>
      </Link>
    </ButtonGroup>
    
  </CardFooter>
</Card>


</div>
</>
  )
} 

export default Item