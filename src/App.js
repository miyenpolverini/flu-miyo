import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { AddCartContextProvider } from './Context/cartContext';
import React, { useState } from 'react';
import FormBuy from './Components/FormBuy/FormBuy';
import PurchaseCompleted from './Components/PurchaseCompleted/PurchaseCompleted';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {

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
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/formBuy' element={<PrivateRoute privType='formBuy'><FormBuy /></PrivateRoute>}></Route>
              <Route path='/purchaseCompleted' element={<PrivateRoute privType='purchaseCompleted'><PurchaseCompleted /></PrivateRoute>}></Route>
              <Route path='*' element={<h2>Not found</h2>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AddCartContextProvider>
    </div>
  );
}

export default App;
