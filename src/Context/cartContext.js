import React, { useState } from 'react'

const Context = React.createContext()

export const AddCartContextProvider = ({ children }) => {

    const [product, setProduct] = useState('')

    /* funciones */
    const isInCart = (prodId) => {

        const item = JSON.parse(window.localStorage.getItem("productoElegido"))

        const prodEncontrado = item.find(prod => parseInt(prod.id) === parseInt(prodId))

        if (prodEncontrado) {
            return prodEncontrado.cantidad
        }
        else {
            return false
        }
    }

    const removeProducto = (prodId) => {

        const item = JSON.parse(window.localStorage.getItem("productoElegido"))

        const itemAlmacenados = item.filter(element => element.id != prodId)

        window.localStorage.setItem("productoElegido", JSON.stringify(itemAlmacenados))

        setProduct(itemAlmacenados)

    }

    const addCarrito = (prodId, prodName, prodPrice, prodQuantity) => {

        class Producto_elegido {
            constructor(id, name, price, cantidad) {
                this.id = id
                this.name = name
                this.price = price
                this.cantidad = cantidad
            }
        }

        const item = window.localStorage.getItem("productoElegido")

        if (item) {

            const EstaEnElCarrito = isInCart(prodId)

            if (EstaEnElCarrito) {

                //borro anterior
                const item = JSON.parse(window.localStorage.getItem("productoElegido"))

                const itemAlmacenados = item.filter(element => element.id != prodId)

                //push nuevo con cantidad actualizada
                const cantidadTotal = parseInt(EstaEnElCarrito) + parseInt(prodQuantity)

                const productoElegido = new Producto_elegido(prodId, prodName, prodPrice, cantidadTotal)

                itemAlmacenados.push(productoElegido);

                window.localStorage.setItem("productoElegido", JSON.stringify(itemAlmacenados))

                setProduct(itemAlmacenados)

            }
            else {
                const productoElegido = new Producto_elegido(prodId, prodName, prodPrice, prodQuantity)
                const productosAgregados = JSON.parse(window.localStorage.getItem("productoElegido"))
                productosAgregados.push(productoElegido);

                setProduct(productosAgregados)

                window.localStorage.setItem("productoElegido", JSON.stringify(productosAgregados))
            }
        }

        else {
            const productoElegido = new Producto_elegido(prodId, prodName, prodPrice, prodQuantity)
            const productosAgregados = new Array()
            productosAgregados.push(productoElegido)

            setProduct(productosAgregados)

            window.localStorage.setItem("productoElegido", JSON.stringify(productosAgregados))
        }
    }


    return (
        <Context.Provider value={{
            addCarrito, removeProducto
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
