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
    const [ starWarsChars, setStarWarsChars ] = useState([]);  // sets state
  
    useEffect(() => {  //hits an API
      function fetchData() {
        const res = axios.get(  //sends a get request
          `https://swapi.co/api/people`    // api url that its fetching
        );
        res
          .then(res => {  //If the request has been completed successfully the function is called with is passed into the call of the then method
            setStarWarsChars(res.data.results);  //setting state
          })
          .catch(error => {   //if the then method is unsccesfull the catch method will execute
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