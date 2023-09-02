import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button,Text } from '@chakra-ui/react'


const Item = ({producto}) => {
  return (
  <>
   <div className="titulo" >
   
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={producto.image}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.title}</Heading>
      <Text>
      {producto.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${producto.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
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

