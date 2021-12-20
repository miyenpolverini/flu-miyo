import { useState, useEffect } from "react"
import { getCategories } from "../../Services/products"
import CategoryList from "../ItemList/CategoryList"

const ItemCategoryContainer = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const list = getCategories()
        list.then(list => { setCategories(list) })

        return (() => {
            setCategories([])
        })
    }, [])


    return (
        <div>
            <CategoryList categorias={categories} />
        </div>
    )
}

export default ItemCategoryContainer
