import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

const ItemDetail = ({ item }) => {

    const [contador, setContador] = useState(0)

    const onAdd = (count) => {
        if (item.stock > 0) {
            setContador(count)
            const fecha = new Date().toLocaleString();
            console.log(fecha)
            console.log(`Se agregaron  ${count}  productos al carrito`)

        }
        else {
            alert("Disculpe! No contamos con stock disponible");
        }
    }

    const ButtonViewCart = () => {
        return (
            <div>
                <Link to={'/'}>
                    <button className='botonSeguirCompra'>Seguir comprando</button>
                </Link>
                <Link to={'/cart'}>
                    <button className='botonVerCarrito'>Ver carrito</button>
                </Link>
            </div>
        )
    }

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
            {contador > 0 ? <ButtonViewCart /> : <ItemCount onConfirm={onAdd} stock={item.stock} initial={1} />}
        </div>
    )
}

export default ItemDetail
