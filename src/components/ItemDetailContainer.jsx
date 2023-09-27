import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore,getDocs, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    const db= getFirestore()
    const oneItem = doc(db, `dc_comics`, `${id}`)
    getDoc(oneItem).then((snapshot) =>{
      if(snapshot.exists()) {
        const docs = snapshot.data();
        setProduct({id: snapshot.id, ...docs})
      }
    })
    }, [])

    return (
      <>
        
        
        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
          
        
          <ItemDetail product={product} />
        
            
           
            </SimpleGrid> 
          
        </>   
      );
    };
    
  
    
  export default ItemDetailContainer
