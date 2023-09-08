import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

  const {category} = useParams ()
  
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  }

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((product) => setProduct(product));
  }, []);

  const filteredProducts = product.filter((producto) => producto.category === category)
  return (
    <>
    
    <div className='body'>
    <h1>{ greeting }</h1>
    </div>
    {

     category ? <ItemList  product={filteredProducts}  />: <ItemList  product={product}/>
}
    </>
  );
};

export default ItemListContainer;