import './App.css';
import Pokecard from './components/Pokecard/Pokecard.jsx';

function App() {
  return (
    <>
    <div className="App">
      <div className="container-fluid background">
        <img className="mt-3 mb-1 pokedex"  src="/pokedex.png" alt="pokedex logo" />
        <Pokecard />
      </div>
    </div>
    </>
  );
}

export default App;
