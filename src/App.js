import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {

  const mensaje = "ItemListContainer"

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={mensaje}/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
