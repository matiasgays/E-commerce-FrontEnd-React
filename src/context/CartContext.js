import * as React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  const [updateValue, setUpdateValue] = useState(true)
  
  const updateArray = (updateItem, quantity) => {
    let newArr = cartList.map((item) => {
      if (updateItem.id === item.id) {
        item.quantity += quantity
      }
      return item
    })
    setCartList(newArr);
  };

  React.useEffect(() => {
    console.log(cartList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[updateValue])

  const addItem = (item, quantity) => {
    if(cartList.some((value) => value.name === item.name)) {
      updateArray(item, quantity)
    }
    else{
      item.quantity = quantity
      setCartList([...cartList, item])
    }
    setUpdateValue(!updateValue)
  }

  const removeItem = (itemId) => {
    console.log(itemId.id)
    const items = cartList.filter(item => item.id !== itemId.id)
    setCartList({ items: items } )
    console.log(cartList)
  }

  const clear = () => {
    setCartList([])
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