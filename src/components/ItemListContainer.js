import * as React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import DATA from '../products'
import CircularProgress from '@mui/material/CircularProgress'

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(DATA)
            },2000)
        })
        .then(res => {
            setListProducts(res);
            setLoading(!loading)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const addItemToCart = (num) => {
        console.log(num)
    }

    return (
        <>
            {<ItemCount stock={5} initial={1} onAdd={addItemToCart}/>}
            {loading ? <CircularProgress/> : <ItemList items={listProducts}/>}
        </>
    )
}

export default ItemListContainer