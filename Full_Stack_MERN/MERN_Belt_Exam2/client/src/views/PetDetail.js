import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import {navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton';

export default props => {

    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + props.id)
        .then(res => setPet({
            ...res.data
        }))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <h1>Pet Shelter</h1>
                </div>
                <div className="col-2">
                    <h3><Link to ="/">Home</Link></h3>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <h3>Details about: {pet.name}</h3>
                </div>
                <div className="col-2">
                    <DeleteButton petId = {pet._id} successCallback={() => navigate('/')}/>
                </div>
            </div>
            <div className="row text-center pt-5">
                <div className="col-6">
                    <h4>Pet Type:</h4>
                </div>
                <div className="col-4">
                    <h4>{pet.type}</h4>
                </div>
            </div>
            <div className="row text-center pt-5">
                <div className="col-6">
                    <h4>Description:</h4>
                </div>
                <div className="col-4">
                    <h4>{pet.description}</h4>
                </div>
            </div>
            <div className="row text-center pt-5">
                <div className="col-6">
                    <h4>Skills:</h4>
                </div>
                <div className="col-4">
                    <h4>{pet.skillOne}</h4>
                    <h4>{pet.skillTwo}</h4>
                    <h4>{pet.skillThree}</h4>
                </div>
            </div>
        </div>
    )
}