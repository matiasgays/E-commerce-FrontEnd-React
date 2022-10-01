import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Tooltip title="IoT enabled devices">
        <Button variant="contained" startIcon={<LocalMallIcon />} color="success">
          <Link to='/cart' style={{textDecoration: 'none', color: 'white'}}>Cart</Link>
        </Button>
      </Tooltip>
    </Box>
  )
}

export default CartWidget