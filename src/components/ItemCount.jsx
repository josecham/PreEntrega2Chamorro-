import React from 'react'
import { useState } from "react"


const ItemCount = () => {
  
  const [contador, setContador] = useState (0)

  const restar =() =>{
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
    

  const onAdd = () => {
    alert(`Compraste ${contador} unidades`)
  }


  return (
    <>
    <div className='contador'>
    <p className='numero'>{contador}</p>
    <button disabled= {contador >= 10} onClick={() => setContador(contador + 1)} className='suma'>+</button>
    <button disabled= {contador <= 0} onClick={restar} className='resta'>-</button>
    <button onClick={onAdd} className='boton'>Comprar</button>
    
    </div>
    </>
  )
}

export default ItemCount
