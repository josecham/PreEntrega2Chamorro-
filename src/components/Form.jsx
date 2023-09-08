import { Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'


const Form = () => {

    const [nombre, setNombre] = useState("")
    
const [email, setEmail] = useState("")
    
const [idPurchase, setIdPurchase] = useState("2564dfds")


    
const handleSubmit = (e) => {
        e.preventDefault()
        
nombre === "" ? alert("campo nombre vacío") : alert(`Bienvenido, ${nombre}`)
        
email === "" ? alert("campo email vacío") : alert(`Registrado con el email, ${email}`)

        
console.log("Información enviada")
    }
    
return (
        
<>
<div className="body" >
<h2 className="item-detail">Formulario</h2>        
<form onSubmit={handleSubmit}>                
<input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
<input type="email" placeholder='Email' onChange={(e) => setNombre(e.target.value)} /> 
<Button type="submit">Enviar</Button>
</form>
<h4 className="item-detail">Id de tu compra:{idPurchase}</h4>
</div>
</>
)
}

export default Form