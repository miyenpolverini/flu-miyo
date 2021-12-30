import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cartContext from '../../Context/cartContext'
import './FormBuy.scss'
import { dataBase } from '../../Services/firebase/firebase'
import { collection, addDoc, writeBatch, getDoc, doc, Timestamp } from 'firebase/firestore'
import Loader from '../../Loader'

const FormBuy = () => {

    const { carrito, calculatePrecioTotal, emptyCart, loadOrder } = useContext(cartContext)

    let navigate = useNavigate()

    const [buying, setBuying] = useState(false)
    const [contact, setContact] = useState({ name: '', email: '', phone: '', comment: '' })
    

    const handleInputChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })

    }

    const sendData = (event) => {
        event.preventDefault()
        console.log(contact.name + '' + contact.email)

    }


    const confirmOrder = (event) => {

        setBuying(true)

        event.preventDefault()

        const newOrder = {
            date: Timestamp.fromDate(new Date()),
            product: carrito,
            total: calculatePrecioTotal(),
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            comment: contact.comment
        }

        const batch = writeBatch(dataBase)
        const outOfStock = []

        newOrder.product.forEach(prod => {
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
                    loadOrder(id)
                })
            }).catch((error) => {
                console.log('Error conexion firebase', error)
            })
        }

        setTimeout(() => {
            navigate('/purchaseCompleted')
            emptyCart()
            setBuying(false)
        }, 2000)


    }    


    return (
        <>
            {buying ? <Loader tipo='comprando' /> :
                <form onSubmit={confirmOrder}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder='name@example.com' name='name' onChange={handleInputChange} required></input>
                        <label className='form-compra' for="floatingInput">Nombre y Apellido</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder='name@example.com' name='email' onChange={handleInputChange} required></input>
                        <label className='form-compra' for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder='name@example.com' name='phone' onChange={handleInputChange} required></input>
                        <label className='form-compra' for="floatingInput">Celular</label>
                    </div>
                    <div className="form-floating mb-5">
                        <textarea className="form-control" id="floatingTextarea" placeholder='name@example.com' name='comment' onChange={handleInputChange}></textarea>
                        <label className='form-compra' for="floatingTextarea">Comentario</label>
                    </div>
                    <button className='btnFinish' type='submit'>Finalizar mi compra</button>
                    <Link to={'/cart'}>
                        <button className='btnCancel'>Cancelar</button>
                    </Link>
                </form>
            }
        </>
    )
}

export default FormBuy
