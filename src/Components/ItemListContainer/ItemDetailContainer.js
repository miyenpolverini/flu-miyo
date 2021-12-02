import ItemDetail from "../Item/ItemDetail"
import { useState, useEffect } from "react"
import { getProducts } from "./products"


const ItemDetailContainer = (props) => {

    const style = {
        color: 'white'
    }
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts()
        list.then(list => {setProducts(list)})
    
        return (() => {    
            setProducts([])
        })
      }, [])


    return (
        <div>            
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer