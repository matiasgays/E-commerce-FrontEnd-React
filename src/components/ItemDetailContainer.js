import * as React from 'react'
import ItemDetail from './ItemDetail'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {
  
  let { id }  = useParams()
  const [itemDetail, setItemDetail] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    
    const collections = collection(db,'products')
    const itemRef = doc(collections,id)
    const fetchItem = async () => {
      try {
        const itemCollection = await getDoc(itemRef)
        setItemDetail({...itemCollection.data(),id: itemCollection.id})
        setIsLoading(!isLoading)
        
      } catch (e) {
        console.error(e);
      }
    }
    fetchItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 

  return (
    <>
      {isLoading ? <CircularProgress sx={{margin:10}}/> :  <ItemDetail item={itemDetail}/>}
    </>
  )
}

export default ItemDetailContainer