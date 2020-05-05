import React from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person firstName = {"Nancy"} lastName = {"Remy"} age = {59} hairColor = {"Red"}/>
      <Person firstName = {"Michael"} lastName = {"Remy"} age = {25} hairColor = {"Green"}/>
    </div>
  );
}

export default App;