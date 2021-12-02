import React from 'react'
import './Item.scss'

const ItemDetail = () => {
    return (
        <div className="itemDetalle">
            <h2>PC Cpu Computadora Intel I3 Hd 1tb 4gb</h2>
            <div >
                <div>
                    <img src="./img/cpuAmpliada.jpg" alt="cpu detalle"></img>
                </div>
                <h4 className="itemPrecio">$ 40.000</h4>
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
