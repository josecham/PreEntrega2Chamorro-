import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting = {"Bienvenidos a la galeria de Comics"}/>
    <ItemDetailContainer/>
    
    </>
  )
}

export default App