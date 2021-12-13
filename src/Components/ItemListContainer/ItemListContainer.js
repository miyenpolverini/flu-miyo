import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { getProducts, getCategoryById } from "../../services/products"
import { useParams } from "react-router-dom"
import Loader from "../../Loader"

const ItemListContainer = (props) => {

    const style = {
        color: 'white'
    }

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        (async () => {
            if (categoryId) {
                const list = getCategoryById(categoryId)
                list.then(list => { setProducts(list) })

            }
            else {
                const list = getProducts()
                list.then(list => { setProducts(list) })

            }
        })()


    }, [categoryId])


    return (
        <>
            <h1 style={style}>{props.greeting}</h1>
            {products.length !== 0 ?
            <ItemList productos={products} />
            :<Loader />}
        </>
    )
}

export default ItemListContainer