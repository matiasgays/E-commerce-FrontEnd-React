import * as React from 'react'
import logo from '../images/logo.png'
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <Avatar
          alt="IoTy"
          src={logo}
          sx={{ width: 60, height: 60 }}
      />
    </Link>
  )
}

export default Logo