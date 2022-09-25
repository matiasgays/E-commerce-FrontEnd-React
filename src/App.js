import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartView from "./components/CartView"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

  const mensaje = "ItemListContainer"

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
          <Route path="/category/:IdCategory" element={<ItemListContainer greeting={mensaje}/>}/> 
          <Route path="/item/:IdProduct" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
