import React from 'react'
import './ItemCount.scss';
import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";


const ItemCount = (props) => {

    const [contador, setContador] = useState(props.initial)

    /* funciones */
    const increment = () => {
        if (contador < props.stock) {
            setContador(contador + 1)
        }
    }

    const decrement = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        if (props.stock > 0) {
            const fecha = new Date().toLocaleString();
            console.log(fecha)
            console.log("Se agregaron "+ contador +" productos al carrito")
        }
        else{
            alert("Disculpe! No contamos con stock disponible");
        }

    }

    return (
        <div>
            <div className='contadorContainer'>
                <div className='boton' onClick={decrement}>
                    <TiMinus />
                </div>
                <h2>{contador}</h2>
                <div className='boton' onClick={increment}>
                    <TiPlus />
                </div>
            </div>
            <button className='botonAgregar' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
