import React, { useState, useEffect, useContext } from 'react'
import Loader from '../../Loader'
import { dataBase } from '../../Services/firebase/firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import HistoryList from '../ItemList/HistoryList'
import cartContext from '../../Context/cartContext'
import { Link, useNavigate } from 'react-router-dom'

const ItemConsulta = () => {

    const { saveHistories } = useContext(cartContext)

    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState({ tipoBusqueda: '', codBusqueda: '' })

    let navigate = useNavigate()


    const dateFormat = (date, locale, options) =>
        new Intl.DateTimeFormat(locale, options).format(date)


    const sendData = (event) => {
        event.preventDefault()
        console.log(search.tipoBusqueda + ' ' + search.codBusqueda)

    }

    const handleInputChange = (event) => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        })

    }

    const ButtonsSearch = () => {
        return (
            <div>
                <Link to={'/consultar-por-dni'}>
                    <button className='botonSeguirCompra'>Por DNI</button>
                </Link>
                <Link to={'/consultar-por-obra-social'}>
                    <button className='botonVerCarrito'>Por obra social</button>
                </Link>
            </div>
        )
    }

    const findOrder = (event) => {

        setLoading(true)

        event.preventDefault()

        if (search.tipoBusqueda === 'dni') {
            /* conexion firebase parametros: referencia base de datos y nombre de la coleccion */
            getDocs(query(collection(dataBase, 'historias'), where('dni', '==', search.codBusqueda), orderBy('date', 'desc'))).then((QuerySnapshot) => {

                const histories = QuerySnapshot.docs.map(doc => {

                    const data = doc.data()
                    const { date } = data
                    const fecha = new Date(date.seconds * 1000)
                    const fechaFormat = dateFormat(fecha, 'es', { dateStyle: 'long' })

                    return { id: doc.id, ...doc.data(), fechaFormat }
                })
                saveHistories(histories)
            }).catch((error) => {
                console.log('Error conexion firebase', error)
            })
        }
        else {
            /* conexion firebase parametros: referencia base de datos y nombre de la coleccion */
            getDocs(query(collection(dataBase, 'historias'), where('osocial', '==', search.codBusqueda), orderBy('date', 'desc'))).then((QuerySnapshot) => {

                const histories = QuerySnapshot.docs.map(doc => {

                    const data = doc.data()
                    const { date } = data
                    const fecha = new Date(date.seconds * 1000)
                    const fechaFormat = dateFormat(fecha, 'es', { dateStyle: 'long' })

                    return { id: doc.id, ...doc.data(), fechaFormat }
                })
                saveHistories(histories)
            }).catch((error) => {
                console.log('Error conexion firebase', error)
            })


        }


        setTimeout(() => {
            navigate('/consultedHistory')
        }, 3000)

    }


    return (
        <div>
            <ButtonsSearch />
        </div>
    )
}

export default ItemConsulta
