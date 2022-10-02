import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ItemBreadcrumbs from './ItemBreadcrumbs'
import ItemCount from './ItemCount'
import Button from '@mui/material/Button'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const ItemDescriptionList = ({item}) => {

  const { addItem } = useContext(CartContext)

  const [toggleCheckout, setToggleCheckout] = useState(true)
  
  const addItemToCart = (num) => {
    setToggleCheckout(false)
    addItem(item,num)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={<ItemBreadcrumbs item={item}/>}
    >
      <ListItem>
        <h1>{item.name}</h1>
      </ListItem>
      <ListItem>
        <AttachMoneyIcon/>
        <ListItemText id="switch-list-label-wifi" primary={item.price}/>
      </ListItem>
      <ListItem>
        {toggleCheckout ? 
          <ItemCount stock={5} initial={1} onAdd={addItemToCart}/> : 
          <Link to={'/cart'} style={{textDecoration: 'none'}}><Button variant="contained">Checkout</Button></Link>}
      </ListItem>
    </List>
  )
}

export default ItemDescriptionList