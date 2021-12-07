import React from 'react'
import './Item.scss'

const ItemDetail = ({item}) => {
    return (
        <div className="itemDetalle">
            <h2>{item.detail}</h2>
            <div>
                <div>
                    <img className="itemImg" src={item.img} alt="cpu detalle"></img>
                </div>
                <h4 className="itemPrecio">$ {item.precio}</h4>
                <div className="itemCarac">
                    <p>Caracteristicas:</p>
                    <ul>
                        <li>Memoria: 4Gb</li>
                        <li>Disco rigido 1Tb</li>
                        <li>Sistema operativo: W10</li>
                        <li>Gabinete con fuente de 500 W con teclado y mouse</li>
                        <li>Gráficos: Onboard</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
