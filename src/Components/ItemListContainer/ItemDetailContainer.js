import ItemDetail from "../Item/ItemDetail"
import { useState, useEffect } from "react"
import { getProductById } from "../../Services/products"
import { useParams } from "react-router-dom"
import Loader from "../../Loader"
import { getDoc, doc } from "firebase/firestore"
import { dataBase } from "../../Services/firebase/firebase"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { paramId } = useParams()

    useEffect(() => {



    }, [paramId])
}

    return (
        <div>
            {item.length !== 0 ?
                <ItemDetail item={item} />
                : <Loader />}
        </div>
    )


    export default ItemDetailContainer