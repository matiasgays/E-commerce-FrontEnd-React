import * as React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  const [updateValue, setUpdateValue] = useState(true)

  React.useEffect(() => {
    console.log(cartList)
  },[updateValue])

  const addItem = (item, quantity) => {
    item.quantity = quantity
    cartList.some((value) => value.name === item.name) ? cartList.some((value) => value.quantity += item.quantity) : setCartList([...cartList, item])
    setUpdateValue(!updateValue)
  }

  const removeItem = (itemId) => {

  }

  const clear = () => {

  }

  const isInCart = (id) => {

  }

  return (
    <>
      <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>{children}</CartContext.Provider>
    </>
  )
}

export default CartContextProvider