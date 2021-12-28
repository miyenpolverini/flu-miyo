import React from 'react'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../Context/cartContext'
import './Cart.scss'
import { dataBase } from '../../Services/firebase/firebase'
import { collection, addDoc, writeBatch, getDoc, doc } from 'firebase/firestore'
import Loader from '../../Loader';

const Cart = () => {

    const { carrito, calculatePrecioTotal, emptyCart, removeProducto, parseNumber } = useContext(cartContext)

    const [processing, setProcessing] = useState(false)

    const CartEmpty = () => {
        return (
            <div>
                <h2 className='tituloCartVacio'>¡El carrito de compras está vacío!</h2>
                <img className='avisoCart' src={'./img/cartEmpty.png'}></img>
                <div>
                    <Link to={'/'}>
                        <button className='botonSeguirCompra'>Empezar a comprar</button>
                    </Link>
                </div>
            </div>
        )
    }

    const CartFull = () => {
        return (
            <div>
                <table className="table table-light table-hover table-carrito">
                    <thead>
                        <tr>
                            <th className='table-dark table-tit-prod' scope="col">Producto</th>
                            <th className='table-dark table-tit-cant' scope="col">Cantidad</th>
                            <th className='table-dark table-tit-prec' scope="col">Precio</th>
                            <th className='table-dark table-tit-stot' scope="col">Subtotal</th>
                            <th className='table-dark table-tit-tach' scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map(product => {
                            return (
                                <tr>
                                    <td className='prod-name'>{product.name}</td>
                                    <td>{product.cantidad}</td>
                                    <td className='prod-name'>$ {parseNumber(product.price)}</td>
                                    <td className='prod-name'>$ {parseNumber(`${product.cantidad * product.price}`)}</td>
                                    <td><img className='tachito' src='./img/tachito.svg'
                                        onClick={() => removeProducto(product.id)}></img></td>

                                </tr>
                            )
                        })}
                        <tr>
                            <td colspan="2"></td>
                            <td className='totalPrecio'>TOTAL</td>
                            <td className='totalPrecio'>$ {calculatePrecioTotal()}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <button className='botonTerminar' onClick={() => confirmOrder()}>Finalizar mi compra</button>
                <button className='botonVaciar' onClick={() => emptyCart()}>Vaciar carrito</button>

            </div>
        )
    }

    const confirmOrder = () => {

        setProcessing(true)

        const newOrder = {
            producto: carrito,
            total: calculatePrecioTotal(),
            nombre: 'miyen',
            cel: '1131116419',
            email: 'miyenpolverini@gmail.com'
        }

        const batch = writeBatch(dataBase)
        const outOfStock = []

        newOrder.producto.forEach(prod => {
            getDoc(doc(dataBase, 'productos', prod.id)).then((QuerySnapshot) => {

                if (QuerySnapshot.data().stock >= prod.cantidad) {
                    batch.update(doc(dataBase, 'productos', QuerySnapshot.id),
                        { stock: QuerySnapshot.data().stock - prod.cantidad })
                }
                else {
                    outOfStock.push({ id: QuerySnapshot.id, ...QuerySnapshot.data() })
                }
            })
        });

        if (outOfStock.length === 0) {
            addDoc(collection(dataBase, 'ordenes'), newOrder).then(({ id }) => {
                batch.commit().then(() => {
                    console.log(id)
                })
            }).catch((error) => {
                console.log('Error conexion firebase', error)
            })
        }

        setTimeout(() => {
            emptyCart()
            setProcessing(false)
        }, 2000)


    }

    return (
        <div>
            {processing ? <Loader /> :
                carrito.length > 0 ? <CartFull /> : <CartEmpty />}
        </div>
    )
}

export default Cart
