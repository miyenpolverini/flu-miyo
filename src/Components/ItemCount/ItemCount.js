import React from 'react'
import './ItemCount.scss';
import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

const ItemCount = ({ onAdd, stock, initial }) => {

    const [contador, setContador] = useState(initial)

    /* funciones */
    const increment = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrement = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }


    return (
        <div>
            <div className='contenidoCant' >
                <div>
                    <h5>Cantidad: </h5>
                </div>
                <div className='contadorContainer' >
                    <div className='boton' onClick={decrement}>
                        <TiMinus />
                    </div>
                    <h4>{contador}</h4>
                    <div className='boton' onClick={increment}>
                        <TiPlus />
                    </div>
                </div>
            </div>
            <button className='botonAgregar' onClick={() => onAdd(contador)}>Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
