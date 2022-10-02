import * as React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const CartView = () => {

  const { cartList } = useContext(CartContext)
  // console.log(cartList)

  return (
    <h1>
      I am the Cart
    </h1>
  )
}

export default CartView