import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button,Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'



const ItemDetail = ({product}) => {
  const {id} = useParams()
  return (
  <>
  <div className="titulo">
 
    <Card maxW='sm'>
  <CardBody>
    <Image
       src={product.image}
       borderRadius='lg'
       className="foto"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.title}</Heading>
      <Text className="text">
      {product.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'  
      className="precio">
      ${product.price}
      </Text>
    </Stack>
  </CardBody>
  
  <CardFooter>
  <ItemCount/>
    
  </CardFooter>
  
</Card>

</div>
</>
  )
} 
 


export default ItemDetail