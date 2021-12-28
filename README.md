# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalación

npm install node-sass
npm install boostrap
npm install react-router-dom@5.2

## Ejecución

npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Funciones (simulación consulta base de datos)

`getProducts`     -> promesa que devuelve los productos
`getProductById`  -> promesa que devuelve los productos por ID
`getCategories`   -> promesa que devuelve las categorias 
`getCategoryById` -> promesa que devuelve las categorias por ID

## Contenedores

`ItemListContainer`     -> es el router principal para traer todos los productos o por ID segùn la categoria
`ItemDetailContainer`   -> es el router para para obtener el detalle del producto seleccionado
`ItemCategoryContainer` -> es el router para para obtener todas las categorias para mostrar en el menú desplegable

## Componentes

`NavBar`       -> menú principal
`ItemList`     -> realiza el mapeo para obtener los productos
`CategoryList` -> realiza el mapeo para obtener las categorias
`CardWidget`   -> devuelve el carrito de compras
`ItemCount`    -> devuelve el contador
`Item`         -> devuelve el formateo de la card principal
`ItemDetail`   -> devuelve el formateo de la card detallada
`Category`     -> devuelve el formateo de las categorias

## Configuración basde de datos Firebase

REACT_APP_apiKey="AIzaSyB3_flfzBfTF5SI04nStQ8vYK0PdBs6FB0"
REACT_APP_authDomain="app-tesysnet.firebaseapp.com"
REACT_APP_projectId="app-tesysnet"
REACT_APP_storageBucket="app-tesysnet.appspot.com"
REACT_APP_messagingSenderId="68754414655"
REACT_APP_appId="1:68754414655:web:9e81b971e9b1a928ee6c8a"
