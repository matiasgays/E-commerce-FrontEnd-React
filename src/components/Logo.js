import * as React from 'react';
import Typography from '@mui/material/Typography';
import logo from './images/logo.png';
import Avatar from '@mui/material/Avatar';

const Logo = () => {
    return (
        <>
        <Avatar
              alt="IoTy"
              src={logo}
              sx={{ width: 60, height: 60 }}
              />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'cursive',
                fontWeight: 'bolder',
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
            }}
            >
          IoTy
          </Typography>
        </>
    )
}

export default Logo;