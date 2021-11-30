import React from 'react'

const Item = ({prod}) => {
    return (
        <div>
            <h1>{prod.name}</h1>
            <p>{prod.stock}</p>
        </div>
    )
}

export default Item
