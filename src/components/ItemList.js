import * as React from 'react'
import Item from './Item'

const ItemList = ({items}) => {

    const itemList = items.map((item) =>  (
        <Item 
            id={item.id} 
            name={item.name} 
            category={item.category}
            price={item.price}
            img={item.img}
            key={item.id}
        />
    ))

    return (
        <div>{itemList}</div>
    )
}

export default ItemList