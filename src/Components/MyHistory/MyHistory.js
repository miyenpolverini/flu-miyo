import React, { useState, useEffect, useContext } from 'react'
import Loader from '../../Loader'
import { dataBase } from '../../Services/firebase/firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import HistoryList from '../ItemList/HistoryList'
import cartContext from '../../Context/cartContext'

const MyHistory = () => {

    const { email } = useContext(cartContext)
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        /* conexion firebase parametros: referencia base de datos y nombre de la coleccion */
        getDocs(query(collection(dataBase, 'ordenes'), where('email', '==', email))).then((QuerySnapshot) => {

            const orders = QuerySnapshot.docs.map(doc => {

                return { id: doc.id, ...doc.data() }
            })
            setOrders(orders)
        }).catch((error) => {
            console.log('Error conexion firebase', error)
        }).finally(() => {
            setLoading(false)
        })

    }, [email])

    
    return (
        <div>
            {loading ? <Loader /> : orders.length === 0 ? <h2 className='tituloCartVacio'> Aún no posee órdenes de compra</h2> : <HistoryList ordenes={orders} />}
        </div>
    )
}

export default MyHistory
