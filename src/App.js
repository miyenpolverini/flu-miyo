import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { AddCartContextProvider } from './Context/cartContext';
import React from 'react';
import FormBuy from './Components/FormBuy/FormBuy';
import PurchaseCompleted from './Components/PurchaseCompleted/PurchaseCompleted';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import InfoEvento from './Components/InfoEvento/InfoEvento';
import ItemCountDown from './Components/ItemCountDown/ItemCountDown';
import Footer from './Components/Footer/Footer';
import ItemIndex from './Components/ItemIndex/ItemIndex';


function App() {

  return (
    <div className="App">
      <AddCartContextProvider>
        <BrowserRouter>
          <NavBar />
          <ItemCountDown />
          <div className="App-header">
            <Routes>
              <Route path='/' element={<ItemIndex />}></Route>
              <Route path='/regalos' element={<ItemListContainer />}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
              <Route path='/detail/:paramId' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/formBuy' element={<PrivateRoute privType='formBuy'><FormBuy /></PrivateRoute>}></Route>
              <Route path='/purchaseCompleted' element={<PrivateRoute privType='purchaseCompleted'><PurchaseCompleted /></PrivateRoute>}></Route>
              <Route path='/infoEvento' element={<InfoEvento />}></Route>
              <Route path='*' element={<h2>Not found</h2>}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AddCartContextProvider>
    </div>
  );
}

export default App;
