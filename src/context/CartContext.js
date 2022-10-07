import * as React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  
  const updateArray = (updateItem, quantity) => {
    let newArr = cartList.map((item) => {
      if (updateItem.id === item.id) {
        item.quantity += quantity
      }
      return item
    })
    setCartList(newArr);
  };

  const addItem = (item, quantity) => {
    if(cartList.some((value) => value.name === item.name)) {
      updateArray(item, quantity)
    }
    else{
      item.quantity = quantity
      setCartList([...cartList, item])
    }
  }

  const removeItem = (itemId) => {
    let newArr = cartList.filter(item => item.id !== itemId)
    setCartList(newArr)
  }

  const clear = () => {
    setCartList([])
  }

  return (
    <>
      <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>{children}</CartContext.Provider>
    </>
  )
}

export default CartContextProvider