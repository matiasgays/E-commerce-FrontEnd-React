import * as React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])

  const addRowArray = (newItem, q) => {
    newItem.quantity = q
    setCartList([...cartList, newItem])
  }
  
  const updateArray = (updateItem, updateQuantity) => {
    let newArr = cartList.map((item) => {
      if (updateItem.id === item.id) {
        item.quantity += updateQuantity
      }
      return item
    })
    setCartList(newArr)
  }

  const addItem = (item, quantity) => {
    isInCart(item) === undefined ?
      addRowArray(item, quantity) : updateArray(item, quantity)
  }

  const removeItem = (itemId) => {
    let newArr = cartList.filter(item => item.id !== itemId)
    setCartList(newArr)
  }

  const isInCart = (item) => {
    const itemFound = cartList.find((product) => {
      return (product.id === item.id) 
    })
    return itemFound
  }

  const clear = () => {
    setCartList([])
  }

  return (
    <>
      <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>{children}</CartContext.Provider>
    </>
  )
}

export default CartContextProvider