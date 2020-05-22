import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';
import axios from 'axios';
import PetList from './components/PetList';
import CreatePet from './views/CreatePet';
import PetDetail from './views/PetDetail';
import UpdatePet from './views/UpdatePet';

function App() {

  const [pet, setPet] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:8000/api/pet')
        .then(res => {
            console.log(res)
            setPet(res.data);
        })
        .catch(err => console.log(err))
  }, [])

  const removeFromDom = petId => {
    setPet(pet.filter(pet => pet._id !== petId));
}

  return (
    <div className="App">
      <Router>
        <PetList path = "/" pet={pet} setPet={setPet} removeFromDom={removeFromDom}/>
        <CreatePet path ="pet/new" pet={pet} setPet={setPet}/>
        <PetDetail path ="pet/:id" pet={pet} setPet={setPet}/>
        <UpdatePet path ="pet/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
