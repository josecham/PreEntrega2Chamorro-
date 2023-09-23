
import React from 'react'
import { createContext, useState, useEffect} from 'react';

export const CartContext = createContext ()

export const CartProvider = ({children}) => {

const [cart, setCart] = useState ([])
const comision = "agregado al carrito"
console.log(cart)


const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Calcular el precio total cada vez que el carrito cambie
        const newTotalPrice = cart.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        );
        setTotalPrice(newTotalPrice);
      }, [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("already in cart")
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }
    
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);



//agregar elementos al carrito
//eliminar

//incremento
//decremento
//onAdd
// Función para agregar un producto al carrito


  return (
    
    <CartContext.Provider value={{ cart, setCart, comision,addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
    {children}
    </CartContext.Provider>
    
  )
}

export default CartProvider
  