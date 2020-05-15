import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import HomePage from './views/HomePage';
import ProductDetail from './views/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path = "/"/>
        <Main path = "products/"/>
        <ProductDetail path = "product/:id"/>
      </Router>
    </div>
  );
}

export default App;
