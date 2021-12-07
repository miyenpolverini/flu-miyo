const products = [
    { id: '1', name: 'Cpu', precio: '40.000', stock: '10', img: './img/cpuAmpliada.jpg', detail: 'PC Cpu Computadora Intel I3 Hd 1tb 4gb' },
    { id: '2', name: 'Teclado', precio: '2.000', stock: '20', img: './img/teclado1.png', detail: 'Teclado gamer Newvision NW-800 QWERTY español color negro con luz RGB' },
    { id: '3', name: 'Mouse', precio: '1.000', stock: '15', img: './img/mouse1.png', detail: 'Mouse de juego Redragon Cobra M711-FPS negro' }
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
