import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greeting }) => {

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  }

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((product) => setProduct(product));
  }, []);

  return (
    <>
    <div className="item-list-container">
    <div className='body'>
    <h1>{ greeting }</h1>
    
    </div>
    <ItemList product={product} />
    </div>
    </>
  );
};

export default ItemListContainer;