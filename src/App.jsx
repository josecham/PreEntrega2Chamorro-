import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer greeting = {"Bienvenidos a la galeria de Comics"}/>
    
    </>
  )
}

export default App