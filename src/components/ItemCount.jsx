import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import { useState } from 'react';

const ItemCount = ({ product }) => {
  
  const { cart, setCart,contador, setContador} = useContext(CartContext);
  const [productoAgregado, setProductoAgregado] = useState(false);

  
  

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    if (contador > 0) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, contador };
        }
        return item;
      });
      setCart(updatedCart);
      setProductoAgregado(true); 
    } else {
      alert('Debes seleccionar al menos una unidad para agregar al carrito');
    }
  };

return (
  <>
    {productoAgregado ? (
      <p className='description'>Producto agregado al carrito</p>
    ) : (
      <div className="contador">
        <p className="numero">{contador}</p>
        <button disabled={contador >= 10} onClick={() => setContador(contador + 1)} className="suma">
          +
        </button>
        <button onClick={() => onAdd()} className="bot">
          Agregar
        </button>
        <button disabled={contador <= 0} onClick={restar} className="resta">
          -
        </button>
      </div>
    )}
  </>
);
    };
export default ItemCount;
