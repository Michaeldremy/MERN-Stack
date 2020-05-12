import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import './App.css';
import DisplayComponent from './components/DisplayComponent'
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <DisplayComponent path="/:input1/:textcolor/:bgcolor"/>
      </Router>
    </div>
  );
}

export default App;
