import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.scss'

const ItemDetail = ({ item }) => {
    return (
        <div className="itemDetalle">
            <h2>{item.detail}</h2>
            <div>
                <div>
                    <img className="itemImg" src={item.img} alt={item.name}></img>
                </div>
                <h4 className="itemPrecio">$ {item.precio}</h4>
                <div className="itemCarac">
                    <p>Caracteristicas principales:</p>
                    <ul>
                        <li>Procesador: {item.proc}</li>
                        <li>Memoria: {item.memory}</li>
                        <li>Disco rigido {item.disk}</li>
                        <li>Sistema operativo: W10</li>
                        <li>Gabinete con fuente de 500 W con teclado y mouse</li>
                    </ul>
                </div>
            </div>
            <ItemCount stock={12} initial={1} />
        </div>
    )
}

export default ItemDetail
