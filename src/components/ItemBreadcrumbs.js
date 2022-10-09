import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from 'react-router-dom'

const ItemBreadcrumbs = ({item}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to={'/'} style={{textDecoration: 'none'}} >
        Home
      </Link>
      <Link to={item.pathCat} style={{textDecoration: 'none'}}>
        {item.category}
      </Link>
      <Typography color="text.primary">{item.name}</Typography>
    </Breadcrumbs>
  )
}

export default ItemBreadcrumbs
