import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import DisplayHome from './components/DisplayHome';
import SearchDisplay from './components/SearchDisplay';
import FilmDisplay from './components/FilmDisplay';
import VehicleDisplay from './components/VehicleDisplay';
import PlanetDisplay from './components/PlanetDisplay';
import { useState } from 'react';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
        <h1>Luke APIWalker</h1>
        <DisplayHome />
      <Router>
        <SearchDisplay path="/people/:id"/>
        <FilmDisplay path="/films/:id"/>
        <VehicleDisplay path="/vehicles/:id"/>
        <PlanetDisplay path="/planets/:id"/>
      </Router>
    </div>
  );
}

export default App;
