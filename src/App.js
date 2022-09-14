import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  const mensaje = "ItemListContainer"

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={mensaje}/>
    </>
  )
}

export default App
