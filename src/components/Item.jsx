import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button,Text } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'

const Item = ({producto}) => {
  return (
  <>
   <div className="titulo" >
   <Grid templateColumns="repeat(3, 1fr)" gap={4}>
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
      <Button variant='solid' colorScheme='blue' className="boton">
        Detalle
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Grid>
</div>
</>
  )
} 

export default Item

