import React from 'react'
import './Item.scss'

const Item = ({ producto }) => {

    return (
        <div className="tarjetas">
            <div className="tarjeta">
                <h3 className="tarjetaTitulo">{producto.name}</h3>
                <div className="tarjeta-contenido">
                    <div>
                        <img src={producto.img} alt={producto.name} classNameName="cardImg"></img>
                    </div>
                    <div className="tarjeta-contenido-detalle">
                        <h6 className="tarjetaPrecio">$ {producto.precio}</h6>
                    </div>
                    <button className="tarjetaDetalle">Ver detalle</button>
                </div>
            </div>
        </div>
    )
}

export default Item
