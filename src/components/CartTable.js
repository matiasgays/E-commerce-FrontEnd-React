import * as React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Button from '@mui/material/Button'

const CartTable = ({handleForm, changeState}) => {

  const { cartList, removeItem, clear } = useContext(CartContext)

  const headers = ['Item', 'Quantity', 'Price', 'Subtotal']

  const clearCartView = () => {
    clear()
  }

  return (
    <Table aria-label="a dense table" sx={{ width: 1/2, mx: 'auto' }}>
      <TableHead>
        <TableRow>
          <TableCell align="center" colSpan={headers.length+1} style={{lineHeight: 2}}>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <DeleteForeverIcon sx={{ color: 'red' }} variant="contained" onClick={clearCartView}/>
          </TableCell>
          {headers.map((header,i) => 
            <TableCell key={i} align="right">{header}</TableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {cartList.map((item) => {
          return (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <DeleteForeverIcon onClick={() => removeItem(item.id)}/>
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.price*item.quantity}</TableCell>
            </TableRow>
        )})}
        <TableRow>
            <TableCell align="left" colSpan={4}>
              Total 
            </TableCell>
            <TableCell align="right">
              {cartList.reduce((total, item)=>total+(item.price*item.quantity),0)} 
            </TableCell>
          </TableRow>
          <TableRow>
              { !changeState &&
                <TableCell align="right" colSpan={5}>
                  <Button variant="contained" onClick={handleForm}>
                    Checkout
                  </Button>
                </TableCell>
              }
          </TableRow>
      </TableBody>
    </Table>
  )
}

export default CartTable