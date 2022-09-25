import * as React from 'react'
import Typography from '@mui/material/Typography'
import logo from './images/logo.png'
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <>
            <Link to='/'>
                <Avatar
                    alt="IoTy"
                    src={logo}
                    sx={{ width: 60, height: 60 }}
                />
            </Link>
            <Typography
                variant="h6"
                noWrap
                component="a"
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

export default Logo