import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoxGenerator from './components/BoxGenerator';
import DisplayBoxes from './components/DisplayBox';

function App() {
  const [Box, setBox] = useState([]);

  const newColoredBox = ( newBox ) => {
    setBox([...Box,newBox]);
  }
  
  return (
    <div className="App">
      <BoxGenerator passedProp = { newColoredBox }/>
      <DisplayBoxes color = {Box}/>
    </div>
  );
}

export default App;
