import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import CreateAuthor from './views/CreateAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {

  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
  axios.get('http://localhost:8000/api/author')
      .then(res => {
          console.log(res)
          setAuthor(res.data);
          setLoaded(true);
      })
      .catch(err => console.log(err))
}, [])

  return (
    <div className="App">
      <Router>
        <Main author={author} setAuthor={setAuthor} path ="/"/>
        <CreateAuthor author={author} setAuthor={setAuthor} path ="newauthor/"/>
        <UpdateAuthor author ={author} setAuthor={setAuthor} path ="author/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
