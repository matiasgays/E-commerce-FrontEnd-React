import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from './Logo'
import MenuCategories from './MenuCategories'
import CartWidget from './CartWidget'

const NavBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <MenuCategories />
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar


