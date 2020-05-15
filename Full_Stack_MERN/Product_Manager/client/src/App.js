import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path ="/"/>
        <ProductDetail path ="product/:id"/>
        <UpdateProduct path ="product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
