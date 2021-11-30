import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <div>
            <ul>
                {products.map(prod => {
                    <Item key={prod.id} producto={prod} />
                })}
            </ul>

        </div>
    )
}

export default ItemList
