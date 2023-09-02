import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button,Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Grid } from '@chakra-ui/react'


const ItemDetail = ({product}) => {
  return (
  <>
  <div className="titulo">
  <Grid templateColumns="repeat(3, 1fr)" gap={4}> 
    <Card maxW='sm'>
  <CardBody>
    <Image
       src={product.image}
       borderRadius='lg'
       className="foto"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.title}</Heading>
      <Text>
      {product.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ${product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Comprar
      </Button>
      <ItemCount/>
    </ButtonGroup>
  </CardFooter>
</Card>
</Grid>
</div>
</>
  )
} 
 


export default ItemDetail