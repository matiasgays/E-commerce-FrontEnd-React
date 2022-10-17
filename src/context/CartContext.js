import * as React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])

  const addRowArray = (newItem, q) => {
    newItem.quantity = q
    setCartList([...cartList, newItem])
  }
  
  const updateArray = (updateItem, quantity) => {
    let newArr = cartList.map((item) => {
      if (updateItem.id === item.id) {
        item.quantity += quantity
      }
      return item
    })
    setCartList(newArr)
  }

  const addItem = (item, quantity) => {
    cartList.find((value) => value.name === item.name) === undefined ?
      addRowArray(item, quantity)
    :
      updateArray(item, quantity)
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