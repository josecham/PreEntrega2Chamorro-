import { Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/CartProvider'
import { useContext } from 'react'

const Form = () => {
    const {  carrito } = useContext(CartContext);
    const [nombre, setNombre] = useState("")
    
const [email, setEmail] = useState("")
    
const [orderId, setOrderId] = useState(null)

const db = getFirestore()
    
const handleSubmit = (e) => {
        e.preventDefault()
        
nombre === "" ? alert("campo nombre vacío") : alert(`Bienvenido, ${nombre}`)
        
email === "" ? alert("campo email vacío") : alert(`Registrado con el email, ${email}`)

addDoc(orderCollection,order).then(({ id }) => setOrderId(id))     
console.log("Información enviada")
    }

    const order ={
    buyer: {
        nombre,email
    },
    items: carrito.map(({id, nombre, cantidad, precio}) =>({
        
        id, nombre, cantidad, precio
    }))
}
    const orderCollection = collection(db, "orden")
return (
        
<>
<div className="body" >
<h2 className="titulo">FORMULARIO</h2>        
<form onSubmit={handleSubmit}>                
<input className="input" type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
<input className="input" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> 
<Button type="submit">Enviar</Button>
</form>
<h4 className="item-detail">Id de tu compra:{orderId}</h4>
</div>
</>
)
}

export default Form