import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos a la tienda virtual" />
      </header>
    </div>
  );
}

export default App;
