import * as React from 'react'
import ItemDetail from './ItemDetail'
import CircularProgress from '@mui/material/CircularProgress'
import DATA from '../products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    let { IdProduct } = useParams()

    const getItem = () => {
        return (
            new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(DATA.filter(value => {return(value.name === IdProduct)}))
                    setIsLoading(!isLoading)
                },2000)
            })
        )
    }

    const [itemDetail, setItemDetail] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        getItem()
        .then((res) => setItemDetail(res[0]))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    return (
        <>
            {isLoading ? <CircularProgress/> :  <ItemDetail item={itemDetail}/>}
        </>
    )
}

export default ItemDetailContainer