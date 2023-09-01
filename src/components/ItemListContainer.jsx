import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const productos = [

        {id: 1, nombre: "Dark Crisis on Infinite Earths", descripcion: "Liga de la Justicia", precio: 1300, pictureUrl:"img" },
        {id: 2, nombre: "Justice League Last Ride", descripcion: "Liga de la Justicia", precio: 1300, pictureUrl:"img"},
        {id: 3, nombre: "Justice League Odyssey", descripcion: "Liga de la Justicia", precio: 1300, pictureUrl:"img"},
        {id: 4, nombre: "Batman Gotham Nights", descripcion: "Batman", precio: 1400, pictureUrl:"img"},
        {id: 5, nombre: "Batman Black Mask", descripcion: "Batman", precio: 1400, pictureUrl:"img"},
        {id: 6, nombre: "Batman The Killing", descripcion: "Batman", precio: 1400, pictureUrl:"img"},
        {id: 7, nombre: "FlashPoint", descripcion: "The Flash", precio: 1500, pictureUrl:"img"},
        {id: 8, nombre: "Flash Zoom Triumphant", descripcion: "The Flash", precio: 1500, pictureUrl:"img"},
        {id: 9, nombre: "Flash The Fastest Man Alive", descripcion: "The Flash", precio: 1500, pictureUrl:"img"},
            
        ];
    
        const mostrarProductos = new Promise((resolve, reject)  => {
          if (productos.length > 0) {
              setTimeout(()=>{
                  resolve(productos)
              }, 3000)
          }else{
              reject("no hay productos para mostrar")
          }
        })
      
        mostrarProductos
        .then((resultado) =>{
          console.log(resultado)
        }) 
        .catch((error) =>{
          console.log(error)
        })
    
      return (
        <div className="item-list-container">
          <div className='body'>
            <h1>{greeting}</h1>
          </div>
          
          <ItemList productos={productos}/>
            
        </div>
       
      );
    };
    
    export default ItemListContainer