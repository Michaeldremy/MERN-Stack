import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Router} from '@reach/router';
import './App.css';
import CreateProject from './components/ProjectForm';
import DashList from './components/DashList';

function App() {

  const [project, setProject] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/project/')
      .then(res => {
        console.log(res)
        setProject(res.data);
      })
  }, [])

  return (
    <div className="App">
      <Router>
        <DashList path = "/" project={project} setProject={setProject}/>
        <CreateProject path = "project/new" project={project} setProject={setProject}/>
      </Router>
    </div>
  );
}

export default App;
