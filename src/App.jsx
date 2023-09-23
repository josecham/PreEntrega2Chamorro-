import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import CartProvider from './context/CartProvider'



const App = () => {
  


  return (
    
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
    <Route exact path = '/' element = {<ItemListContainer greeting = {"Bienvenidos a la galeria de Comics"}/>}/>
    <Route exact path = '/cart' element = {<Cart/>}/>
    <Route exact path = '/item/:id' element = {<ItemDetailContainer/>}/>
    <Route exact path = '/categoria/:categoria' element = {<ItemListContainer/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>

    
  
  )
}

export default App