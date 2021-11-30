import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {
    return (
        <div>
            <ul>
                {productos.map(product =>
                    <Item key={product.id} producto={product} />
                )}
            </ul>
        </div>
    )
}

export default ItemList
