import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CartWidget from './CartWidget';
import Logo from './Logo';
import MenuCategories from './MenuCategories';
import UserWidget from './UserWidget';

const NavBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <MenuCategories />
          <CartWidget />
          <UserWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;


