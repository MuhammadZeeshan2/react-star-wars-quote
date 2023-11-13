// src/App.js
import React from 'react';
import Character from './Character';

function App({ data }) {
  return (
    <div >
      {data.map((character, index) => (
        <Character key={index} name={character.name} quotes={character.quotes} />
      ))}
    </div>
  );
}

export default App;
