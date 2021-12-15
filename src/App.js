import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
