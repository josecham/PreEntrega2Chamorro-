import React from 'react'
import ItemList from './ItemList';
import {useEffect, useState} from 'react'

const ItemListContainer = () => {

    const getProducts = async () => {
      const response = await flech ("https://fakestoreapi.com/products")
      const data = await response.json()
     
      return data
    }
    const [product, setProduct] = useState ([])
    

    useEffect(() => {
      getProducts().then((product) => setProduct(product))

    },[]
    )

    
      return (
        
          
          <ItemList product={product}/>
            
       
      );
    };
    
    export default ItemListContainer