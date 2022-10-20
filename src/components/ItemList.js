import * as React from 'react'
import Item from './Item'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'

const ItemList = ({items}) => {

  return (
    <Box sx={{ flexGrow: 1, margin: '5%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {items.map((item) =>  (
          <Grid xs={2} sm={4} md={4} key={item.id}>
            <Item  
              name={item.name} 
              price={item.price}
              key={item.id}
              path={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ItemList