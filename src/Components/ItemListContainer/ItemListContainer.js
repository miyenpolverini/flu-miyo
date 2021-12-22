import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { getProducts, getCategoryById } from "../../Services/products"
import { useParams } from "react-router-dom"
import Loader from "../../Loader"
import { dataBase } from '../../Services/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = (props) => {

    const style = {
        color: 'white'
    }

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        /* conexion firebase parametros: referencia base de datos y nombre de la coleccion */
        getDocs(collection(dataBase, 'productos')).then((QuerySnapshot) => {

            const products = QuerySnapshot.docs.map(doc => {
           
                return{ id: doc.id, ...doc.data()}
            })

            setProducts(products)
        }).catch((error) =>{
            console.log('Error conexion firebase', error)
        }).finally(() =>{
            setLoading(false)
        })





    }, [categoryId])


    return (
        <>
            {/* <h1 style={style}>{props.greeting}</h1> */}
            {loading ? <Loader /> : <ItemList productos={products} />}
        </>
    )
}

export default ItemListContainer