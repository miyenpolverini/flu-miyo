import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'
import cartContext from '../../Context/cartContext'

const ItemDetail = ({ item }) => {

    const [count, setCounter] = useState(0)
    const [btnAgregar, setBtnAgregar] = useState(true)

    const { addCarrito, parseNumber } = useContext(cartContext)

    const agregarCarrito = (contador) => {

        if (item.stock > 0) {
            addCarrito(item.id, item.detail, item.precio, item.img, contador)
            setCounter(contador)
            setBtnAgregar(false)
            const fecha = new Date().toLocaleString();
            console.log(fecha)
            console.log('Se agregaron ' + contador + ' productos al carrito')

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
                    <button className='botonVerCarrito'>Ir al carrito</button>
                </Link>
            </div>
        )
    }

    const NoStock = () => {
        return (
            <div>
                <h4 className='sinStock'>SIN STOCK</h4>
            </div>
        )
    }

    return (
        <div className="itemDetalle">
            <div>
                <div>
                    <img className="itemImg" src={item.img} alt={item.name}></img>
                </div>
            </div>
            <div>
                <h2>{item.detail}</h2>
                <h4 className="itemPrecio">$ {parseNumber(item.precio)}</h4>
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
                {item.stock === 0 ? <NoStock /> : btnAgregar ? <ItemCount onAdd={(contador) => agregarCarrito(contador)} stock={item.stock} initial={1} />
                    : <ButtonViewCart />}
            </div>
        </div>
    )
}

export default ItemDetail
