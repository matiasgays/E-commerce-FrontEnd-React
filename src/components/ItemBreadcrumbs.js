import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const ItemBreadcrumbs = ({item}) => {
  return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={item.routeCat}
        >
          {item.category}
        </Link>
        <Typography color="text.primary">{item.name}</Typography>
      </Breadcrumbs>
  );
}

export default ItemBreadcrumbs
