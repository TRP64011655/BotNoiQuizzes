import React, { useState } from 'react';
import './App.css';
import './Button.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllPokemonData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const promises = data.results.map(pokemon => {
          return fetch(pokemon.url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
              return null;
            });
        });

        Promise.all(promises)
          .then(data => {
            setPokemonData(data.filter(Boolean));
            setError(null);
          })
          .catch(error => {
            setError('There was a problem fetching Pokémon data.');
            console.error('There was a problem with the fetch operation:', error);
          });
      })
      .catch(error => {
        setError('There was a problem fetching Pokémon index.');
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div className="App">
      <h1>API<br />Pokemon</h1>
      <button className="Button" onClick={fetchAllPokemonData}>Get Pokemon Index</button>
      {pokemonData.length > 0 && (
        <div>
          {pokemonData.map((pokemon, index) => (
            <div key={index} className="PokemonContainer">
              <h2>{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>Type 1: {pokemon.types[0].type.name}</p>
              {pokemon.types.length > 1 && <p>Type 2: {pokemon.types[1].type.name}</p>}
              <p>Base Stats:</p>
              <ul>
                {pokemon.stats.map((stat, index) => (
                  <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {error && <p className="Error">{error}</p>}
    </div>
  );
}

export default App;
