import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'

const App = () => {
  


  return (
    <BrowserRouter>
    <NavBar />

    <Routes>
    <Route exact path = '/' element = {<ItemListContainer greeting = {"Bienvenidos a la galeria de Comics"}/>}/>
    <Route exact path = '/cart' element = {<Cart/>}/>
    {/*
    <Route exact path = '/' element = {<Home/>}/>
    <Route exact path = '/about' element = {<About/>}/>
    <Route exact path = '/product/:id' element = {<ProductDetail/>}/>*/}
    <Route exact path = '/item/:id' element = {<ItemDetailContainer/>}/>
    <Route exact path = '/category/:category' element = {<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App