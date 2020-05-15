import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/"/>
        <Detail path="people/:id"/>
      </Router>
    </div>
  );
}
export default App;