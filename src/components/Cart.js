import * as React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Form from './Form'
import CartTable from './CartTable'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'

let sumTotal = 0
let totalItems = []
let orderPlaced = ''

const Cart = () => {

  const { cartList, clear } = useContext(CartContext)
  const [displayForm, setDisplayForm] = useState(false)
  const [submit, setSubmit] = useState(false)

  const handleForm = () => {
    setDisplayForm(!displayForm)
    totalItems = cartList.map((item) => {
      return (item)
    })
    sumTotal = cartList.reduce((total, item)=>total+(item.price*item.quantity),0)
  }

  const handleCheckout = (id) => {
    orderPlaced = `Your order number: ${id} was placed successfully`
    setSubmit(!submit)
    clear()
  }

  return (
    <>
      {submit ? 
        <Typography sx={{m: 5}}>{orderPlaced}</Typography>
      :
        <>
          <h1 style={{textAlign: 'center'}}>
            Cart
          </h1>
          {cartList.length === 0 ?
            <div style={styles}>
              <Button variant="contained" sx={{color: 'white', width: 1/4}}>
                <Link to={'/'} style={{textDecoration: 'none',color: 'inherit'}}>
                  Cart is empty
                </Link>
              </Button>
            </div> 
            : <CartTable handleForm={handleForm} changeState={displayForm}/>
          }
          {(displayForm && cartList.length > 0) && <Form items = {totalItems} total={sumTotal} submit={handleCheckout}/>
          }
          </>
      }
    </>
  )
}

export default Cart

const styles = {
  display: 'flex',  
  justifyContent:'center'
}