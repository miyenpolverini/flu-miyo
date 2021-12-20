const products = [
    { id: '1', category: 'cpu', precio: '40.000', stock: '10', img: '../../img/cpuAmpliada.jpg', detail: 'PC Cpu Computadora Intel I3 HD 1tb 4gb', proc: 'Intel Core i3', memory: '4gb', disk: '1tb' },
    { id: '2', category: 'cpu', precio: '50.000', stock: '6', img: '../../img/cpu4.jpg', detail: 'PC Cpu Computadora Intel I5 HD 500gb 8gb', proc: 'Intel Core i5', memory: '8gb', disk: '500gb'  },
    { id: '3', category: 'cpu', precio: '90.000', stock: '2', img: '../../img/cpu5.jpg', detail: 'PC Gamer Cpu Amd Ryzen 5 3600 120gb 8gb Gt 1030 2gb P1', proc: 'AMD RYZEN 5', memory: '8gb', disk: '500gb'},
    { id: '4', category: 'teclado', precio: '2.000', stock: '20', img: '../../img/teclado1.png', detail: 'Teclado gamer Newvision NW-800 QWERTY español color negro con luz' },
    { id: '5', category: 'mouse', precio: '1.000', stock: '15', img: '../../img/mouse1.png', detail: 'Mouse de juego Redragon Cobra M711-FPS negro' }
]


const categories = [
    {id:'cpu', description:'CPU'},
    {id:'teclado', description:'Teclados'},
    {id:'mouse', description:'Mouse'}
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

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(categories), )
    })
}

export const getCategoryById = (id) => {  
    return new Promise((resolve, reject) => {
        const category = products.filter(prod => prod.category === id)
        setTimeout(() => resolve(category), 1000)
    })
}
