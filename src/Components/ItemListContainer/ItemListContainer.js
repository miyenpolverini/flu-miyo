import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { getProducts, getCategoryById } from "../../Services/products"
import { useParams } from "react-router-dom"
import Loader from "../../Loader"
import { dataBase } from '../../Services/firebase/firebase'
import { collection, getDocs, query, QuerySnapshot } from 'firebase/firestore'


const ItemListContainer = (props) => {

    const style = {
        color: 'white'
    }

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

       /*  getDocs(collection(dataBase, 'productos' )).then((QuerySnapshot) => {

            console.log(QuerySnapshot)
        })
 */
        (async () => {
            if (categoryId) {
                const list = getCategoryById(categoryId)
                list.then(list => {
                    setProducts(list)
                    setLoading(false)
                })


            }
            else {
                const list = getProducts()
                list.then(list => {
                    setProducts(list)
                    setLoading(false)
                })


            }

        })()


    }, [categoryId])


    return (
        <>
            {/* <h1 style={style}>{props.greeting}</h1> */}
            {loading ? <Loader /> : <ItemList productos={products} />}
        </>
    )
}

export default ItemListContainer