import * as React from 'react'
import ItemList from '../components/ItemList'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const [listProducts, setListProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  let { IdCategory } = useParams()

  React.useEffect(() => {
    const collections = collection(db,'products')
    const q = query(collections, where('category', '==', `${IdCategory}`))
    let display = q
    IdCategory === undefined && (display = collections)
    const fetchProducts = async () => {
      try{
        const list = []
        const productsCollection = await getDocs(display)
        productsCollection.forEach(product => {
          list.push({...product.data(),id: product.id})
        })
        setListProducts([...list])
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[IdCategory])

  return (
    <>
      {loading ? <CircularProgress sx={{margin:10}}/> : <ItemList items={listProducts}/>}
    </>
  )
}

export default ItemListContainer