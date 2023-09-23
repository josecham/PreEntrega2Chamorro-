import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {

  const {categoria} = useParams ()
  
  const [product, setProducts] = useState([])
  console.log(product)
//`{${categoria}`
  useEffect(() =>{
    const db = getFirestore()
    const itemsCollection = collection (db,`dc_comics`)
    getDocs (itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => 
      ({ ...doc.data(), id:doc.id
      }))
      setProducts(docs)
    })
  }, [])
  /*
   const [productos, setProductos] = useState ([])
   productos ==[]
   productos.Length === 0 ? <Loading/> : <ItemList/>
  
  
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  }

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((product) => setProduct(product));
  }, []);
*/



  
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