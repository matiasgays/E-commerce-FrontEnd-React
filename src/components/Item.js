import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, path}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={process.env.PUBLIC_URL + `/${name}.jpg`}
        alt={name}
        sx={{objectFit: 'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
      </Typography>
      </CardContent>
      <CardActions>
        <Link key={id} to={`/${path}`} style={{textDecoration: 'none'}}>
          <Button size="small">View Details</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Item