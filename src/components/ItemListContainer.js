import * as React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    const addItemToCart = (num) => {
        console.log(num);
    }

    return (
        <>
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={1} onAdd={addItemToCart}/>
        </>
    )
}

export default ItemListContainer;