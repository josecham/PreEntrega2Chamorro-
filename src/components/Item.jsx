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
    <div className="foto" >
    <Image
      src={producto.image}
      borderRadius='lg'
    />
    </div>
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
</Grid>
</div>
</>
  )
} 

export default Item

