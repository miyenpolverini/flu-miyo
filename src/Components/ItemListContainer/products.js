const products = [
    { id: '1', name: 'Cpu', precio: '40.000', stock: '10', img: './img/cpu1.png' },
    { id: '2', name: 'Teclado', precio: '2.000', stock: '20', img: './img/teclado1.png' },
    { id: '3', name: 'Mouse', precio: '1.000', stock: '15', img: './img/mouse1.png' }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 1000)
    })
}

export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products[0]), 2000)
    })
}
