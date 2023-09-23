import { Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const Form = () => {

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
        nombre,email
    }
    const orderCollection = collection(db, "orden")
return (
        
<>
<div className="body" >
<h2 className="item-detail">Formulario</h2>        
<form onSubmit={handleSubmit}>                
<input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
<input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> 
<Button type="submit">Enviar</Button>
</form>
<h4 className="item-detail">Id de tu compra:{orderId}</h4>
</div>
</>
)
}

export default Form