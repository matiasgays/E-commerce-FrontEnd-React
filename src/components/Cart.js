import * as React from 'react'
import { useContext, useState } from 'react'
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
  const [emptyCart, setEmptyCart] = useState(false)

  React.useEffect(() => {
    cartList.length === 0 && setEmptyCart(!emptyCart)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const toggleCartView = () => {
    clear()
    setEmptyCart(!emptyCart)
  }

  return (
    <>
    {emptyCart ? 
      <Link to={'/'} style={{textDecoration: 'none'}}><Button variant="contained" sx={{margin:10}}>Cart empty</Button></Link> :
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                Cart
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
                  <DeleteForeverIcon onClick={() => removeItem(item)}/>
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
                  Total 
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    }
  </>
  )
}

export default Cart