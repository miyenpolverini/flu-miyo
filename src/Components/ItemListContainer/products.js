function getProducts() {
    return new Promise((resolve, reject) => {

        const products = [
            { id: '1', name: 'cpu', precio: '400', stock: '10' },
            { id: '2', name: 'teclado', precio: '20', stock: '20' },
            { id: '3', name: 'mouse', precio: '10', stock: '15' }
        ]
        setTimeout(() => resolve(products), 1000)
    })
}

export default getProducts
