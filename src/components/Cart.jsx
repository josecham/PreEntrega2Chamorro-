import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { Link } from 'react-router-dom'

const car = [1]
const Cart = () => {
const { cart, setCart, comision} = useContext (CartContext)
console.log(cart)
  return (
    <>
    
    <div>
    <h1 className="titulo">MI CARRITO</h1>
    <h1 className="titulo">{comision}</h1>
    {car.length > 0 ?
<Form/>
:
<Link to = {"/"}>
    <h3>Regresa a la pantalla principal</h3>
    </Link>


    }
    </div>

    
  
  </>
  )
}

export default Cart
