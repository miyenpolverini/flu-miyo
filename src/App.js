import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import { AddCartContextProvider } from './Context/cartContext';
import React, { useState } from 'react';

function App() {

  const [saludo, setSaludo] = useState('Buenas')

  window.localStorage.clear();

  return (
    <div className="App">
        <AddCartContextProvider>
          <BrowserRouter>
            <NavBar />
            <div className="App-header">
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Bienvenidos a la tienda virtual" />}>
                </Route>
                <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
                <Route path='/detail/:paramId' element={<ItemDetailContainer />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </AddCartContextProvider>
    </div>
  );
}

export default App;
