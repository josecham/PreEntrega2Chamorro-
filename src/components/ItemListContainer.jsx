import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import Loading from './Loading';

const ItemListContainer = ({ greeting }) => {

  const {categoria} = useParams ()

  const [loading, setLoading] = useState(true)
  const [product, setProducts] = useState([])
  

  useEffect(() =>{
    const db = getFirestore()
    const itemsCollection = collection (db,`dc_comics`)
    getDocs (itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => 
      ({ ...doc.data(), id:doc.id
      }))
      setProducts(docs)
      setLoading(false)
    })
  
},
[])
  if(loading){
    return <Loading/>
  }
  
  
  const filteredProducts = product.filter((producto) => producto.categoria === categoria)
  return (
    <>
    
    <div className='body'>
    <h1>{ greeting }</h1>
    </div>
    {

     categoria ? <ItemList  product={filteredProducts}  />: <ItemList  product={product}/>
}
    </>
  );     
};

export default ItemListContainer;