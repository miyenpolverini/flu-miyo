import ItemList  from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useEffect } from "react"
import { getProducts } from "./products"

const ItemListContainer = (props) => {

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
            <h1 style={style}>{props.greeting}</h1>
            <ItemList productos= {products} />
            <ItemCount stock= {12} initial= {1} />
        </div>
    )
}

export default ItemListContainer