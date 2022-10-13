import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from "./containers/ItemDetailContainer"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./context/CartContext"

const App = () => {

  return (
    <>
    <React.StrictMode>
        <BrowserRouter>
          <CartContextProvider>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:IdCategory" element={<ItemListContainer/>}/> 
              <Route path="/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

export default App
