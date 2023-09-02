import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'

const Item = ({producto}) => {

  return (
    <>
    <div className="item-list titulo">
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
    <Card maxW='sm'>
      <Image src={producto.image} />
      <CardBody>
        <Stack spacing="1rem">
          <Heading as="h2" size="md">
            {producto.title}
          </Heading>
          
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
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

