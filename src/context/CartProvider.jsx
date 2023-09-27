import React from 'react'
import { createContext, useState, useEffect} from 'react';

export const CartContext = createContext ()

export const CartProvider = ({children}) => {

const [cart, setCart] = useState ([])

const comision = "agregado al carrito"

const [carrito, setCarrito] = useState ([])
const [cantidad, setCantidad] = useState(0);
const [contador, setContador] = useState(0);


const removeItem = (productId) => {
  const updatedCarrito = carrito.filter((producto) => producto.id !== productId);
  setCarrito(updatedCarrito);
};


const addItem = (item, quantity) => {
  if (!isInCart(item.id)){
      setCart(prev => [...prev, {...item, quantity}])
  } else {
      console.error("already in cart")
  }
}



const isInCart = (itemId) => {
  return cart.some(prod => prod.id === itemId)
}

const totalContador = carrito.reduce((acc, el) => acc + 1, 0);


  return (
    

  <CartContext.Provider value={{ cart, setCart, comision, carrito, setCarrito, removeItem, totalContador, cantidad, setCantidad, contador, setContador, addItem }}>
    {children}
    </CartContext.Provider>
    
  )
}

export default CartProvider
 