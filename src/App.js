import React from 'react';
import CountryBox from './containers/CountryBox';
import './App.css';

function App() {
  return (
    <div id="countries">
      <header>
        <h1>Explore the World!</h1>
        <CountryBox />
      </header>
    </div>
  );
}

export default App;
