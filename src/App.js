import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <header className="App-header">
            <Route exact path='/'>
              <ItemListContainer greeting="Bienvenidos a la tienda virtual" />
            </Route>
            <Route exact path='/category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route exact path='/detail/:paramId'>
              <ItemDetailContainer />
            </Route>
          </header>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
