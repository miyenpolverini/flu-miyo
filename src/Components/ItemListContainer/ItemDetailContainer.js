import ItemDetail from "../Item/ItemDetail"
import { useState, useEffect } from "react"
import { getProductById } from "../../Services/products"
import { useParams } from "react-router-dom"
import Loader from "../../Loader"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { paramId } = useParams()

    useEffect(() => {
        const list = getProductById(paramId)
        list.then(list => { setItem(list) })

        return (() => {
            setItem([])
        })
    }, [paramId])


    return (
        <div>
            {item.length !== 0 ?
            <ItemDetail item={item} />
            :<Loader />}
        </div>
    )
}

export default ItemDetailContainer