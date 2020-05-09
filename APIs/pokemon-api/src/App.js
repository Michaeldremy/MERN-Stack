import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
}, []);

  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    toggle ? setToggle(false): setToggle(true);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 pt-5 pb-5">
          <div>
              <h2>Welcome, click the button to fetch pokemon!</h2>
          </div>
            <button onClick ={onClick} className="btn btn-primary">Fetch Pokemon!</button>
            <div className="pt-3" style={{fontSize: 18}}>
            {
              // line 33 is a if statement calling from line 18 "toggle ?"
              toggle ? 
              pokemon.length > 0 && pokemon.map((pokemon, i) => {
                return (<div key= {i}> {pokemon.name}</div>)
              })
              // line 38 is an else statement ":"
              :
              ""
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
