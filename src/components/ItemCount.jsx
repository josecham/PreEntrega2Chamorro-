
import React from 'react'
import { useState } from "react"

const ItemCount = () => {
  
  const [contador, setContador] = useState (0)
  console.log(contador)
  const restar =() =>{
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
    

  const onAdd = () => {
    if (contador > 0) {
      alert(`Se agregaron ${contador} unidades al carrito`);
    } else {
      alert('Debes seleccionar al menos una unidad para agregar al carrito');
    }
  }


  return (
    <>
    <div className='contador'>
    <p className='numero'>{contador}</p>
    <button disabled= {contador >= 10} onClick={() => setContador(contador + 1)} className='suma'>+</button>
    <button  className='bot' onClick={() => onAdd(contador)}>Agregar</button>
    <button disabled= {contador <= 0} onClick={restar} className='resta'>-</button>
    </div>
    
    </>
  )
}

export default ItemCount

