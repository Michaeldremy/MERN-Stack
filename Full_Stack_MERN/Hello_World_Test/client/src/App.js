import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="person/"/>
        <Update path="person/:id/edit"/>
        <Detail path="person/:id"/>
      </Router>
    </div>
  );
}
export default App;