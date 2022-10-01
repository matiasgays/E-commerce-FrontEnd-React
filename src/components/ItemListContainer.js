import * as React from 'react'
import ItemList from './ItemList'
import DATA from '../products'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const [listProducts, setListProducts] = React.useState([])
  const [loading, setLoading] = React.useState()
  let { IdCategory } = useParams()

  React.useEffect(() => {
    setLoading(true)
    new Promise((resolve, reject) => {
      setTimeout(() => {
        IdCategory === undefined ? resolve(DATA) : resolve(DATA.filter(value => {return (value.category===IdCategory)}))
      },2000)
    })
    .then(res => {
      setListProducts(res);
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[IdCategory])

  return (
    <>
      {loading ? <CircularProgress sx={{margin:10}}/> : <ItemList items={listProducts}/>}
    </>
  )
}

export default ItemListContainer