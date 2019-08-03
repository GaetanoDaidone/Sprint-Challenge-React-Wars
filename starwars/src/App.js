import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './components/App.css';
import CharacterList from './components/CharacterList';



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  function App() {
    const [ starWarsChars, setStarWarsChars ] = useState([]);
  
    useEffect(() => {
      function fetchData() {
        const res = axios.get(
          `https://swapi.co/api/people`
        );
        res
          .then(res => {
            setStarWarsChars(res.data.results);
          })
          .catch(error => {
            console.log(error.message)
          })
      }
      if(starWarsChars.length === 0){
        fetchData();
      }
    });
    return (
      <div className="App-wars">
        <header className="header">
        React Wars
        </header>
        <CharacterList chars={starWarsChars}/>
      </div>
    );
  }
  
  export default App;