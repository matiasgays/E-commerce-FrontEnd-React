import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ItemBreadcrumbs from './ItemBreadcrumbs'
import ItemCount from './ItemCount'

const ItemDescriptionList = ({item}) => {

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
        <ItemCount stock={5} initial={1}/>
      </ListItem>
    </List>
  );
}

export default ItemDescriptionList