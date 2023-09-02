import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'


const ItemDetailContainer = () => {
  
  const getProducts = async () => {
    const response = await fletch ("https://fakestoreapi.com/products")
    const data = await response.json()
   
    return data
  }
  const [product, setProduct] = useState ([])
  

  useEffect(() => {
    getProducts().then((product) => setProduct(product))

  },[]
  )


  return (
    <>
    
    
        <ItemDetail product={product}/>
  
       
       
      
      </>
    )
  }
  export default ItemDetailContainer