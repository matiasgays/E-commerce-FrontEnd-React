import * as React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from '@mui/material/Button'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Link } from 'react-router-dom'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

const CartWidget = () => {

  const {cartList} = useContext(CartContext)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
          <Button variant="contained" startIcon={<LocalMallIcon />} color="success" onMouseEnter={handleOpenUserMenu}>
            {cartList.length > 0 && cartList.reduce(((total, itemQ)=>total+itemQ.quantity),0)}
          </Button>
          {cartList.length > 0 &&
            <Menu
              sx={{ mt: '35px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClick={handleCloseUserMenu}
            >
            {cartList.map((item) => (
              <MenuItem key={item.name} divider={true}>
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={`../../${item.img}`} />
                </ListItemAvatar>
                <ListItemText sx={{px: 3}}>{item.name}</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  {item.quantity}
                </Typography>
              </MenuItem>
            ))}
            <MenuItem style={{justifyContent: 'center'}}>
              <Link to='/cart' style={{textDecoration: 'none', color: 'white'}} >
              <Button variant="contained">
                Checkout
              </Button>
              </Link>
            </MenuItem>
            </Menu>
          }
      </Box>
    </>
  )
}

export default CartWidget