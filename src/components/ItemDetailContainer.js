import * as React from 'react'
import ItemDetail from './ItemDetail'
import CircularProgress from '@mui/material/CircularProgress'
import DATA from '../products'

const ItemDetailContainer = () => {

    const getItem = () => {
        return (
            new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(DATA[0])
                    setIsLoading(!isLoading)
                },2000)
            })
        )
    }

    const [itemDetail, setItemDetail] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        getItem()
        .then((res) => setItemDetail(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    return (
        <>
            {isLoading ? <CircularProgress/> :  <ItemDetail item={itemDetail}/>}
        </>
    )
}

export default ItemDetailContainer