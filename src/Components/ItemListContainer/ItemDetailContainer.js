import ItemDetail from "../Item/ItemDetail"
import { useState, useEffect } from "react"
import { getItem } from "./products"


const ItemDetailContainer = (props) => {

    const style = {
        color: 'white'
    }
    
    const [item, setItem] = useState([])

    useEffect(() => {
        const list = getItem()
        list.then(list => {setItem(list)})
    
        return (() => {    
            setItem([])
        })
      }, [])


    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer