import * as React from 'react'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'

const MenuCategories = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [categories, setCategories] = React.useState([])
  
  React.useEffect(() => {
    const collections = collection(db,'products')
    const fetchProducts = async () => {
      try{
        const listCategories = []
        const productsCollection = await getDocs(collections)
        productsCollection.forEach(product => {
          if (listCategories.includes(product.data().category) === false) {
            listCategories.push(product.data().category)
          }
          setCategories([...listCategories])
        })
      } catch (e) {
        console.error(e)
      }
    }
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
    
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
              display: { xs: 'block', md: 'none' },
          }}
        >
          {categories.map((cat, i) => (
              <MenuItem key={i} onClick={handleCloseNavMenu}>
                <NavLink to={`/category/${cat}`} style={{textDecoration: 'none'}}>{cat}</NavLink>
              </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {categories.map((cat, i) => (
          <Button
            key={i}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <NavLink to={`/category/${cat}`} style={{textDecoration: 'none', color: 'white'}}>{cat}</NavLink>
          </Button>
        ))}
      </Box>
    </>
  )
}

export default MenuCategories