import * as React from 'react'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DATA from '../products'
import { NavLink } from 'react-router-dom'

let uniqueCategories = [];

uniqueCategories = DATA.filter(element => {
  const isDuplicate = uniqueCategories.includes(element.category);

  if (!isDuplicate) {
    uniqueCategories.push(element.category);

    return true;
  }

  return false;
});

const MenuCategories = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null)

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
                {uniqueCategories.map((item) => (
                    <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                      <NavLink to={item.routeCat} style={{textDecoration: 'none'}}>
                        <Typography textAlign="center">{item.category}</Typography>
                      </NavLink>
                    </MenuItem>
                ))}
              </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {uniqueCategories.map((item) => (
                <Button
                    key={item.id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                <NavLink to={item.routeCat} style={{textDecoration: 'none', color: 'white'}}>{item.category}</NavLink>
                </Button>
              ))}
          </Box>
        </>
    )
}

export default MenuCategories