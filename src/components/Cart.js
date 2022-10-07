import * as React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cartList, removeItem, clear } = useContext(CartContext)

  const toggleCartView = () => {
    clear()
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
              {cartList.length === 0 ?
                <>
                  <h1>Cart is empty</h1>
                  <Button variant="contained"><Link to={'/'} style={{textDecoration: 'none'}}>Go Back</Link></Button>
                </> :
                <h1>Cart</h1>
              }
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <DeleteForeverIcon sx={{ color: 'red' }} variant="contained" onClick={toggleCartView}/>
              </TableCell>
              <TableCell align="center">Item</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price&nbsp;($)</TableCell>
              <TableCell align="right">Subtotal&nbsp;($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList.map((item) => (
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
            ))}
            <TableRow>
                <TableCell align="left" colSpan={4}>
                  Total 
                </TableCell>
                <TableCell align="right">
                  {cartList.reduce((total, item)=>total+(item.price*item.quantity),0)} 
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  </>
  )
}

export default Cart