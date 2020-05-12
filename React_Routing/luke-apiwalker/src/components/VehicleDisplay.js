import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import errornobi from './errornobi.jpg';

const VehicleDisplay = (props) => {
    const [starwars, setStarwars] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        setError("");
        axios.get(`https://swapi.dev/api/vehicles/${props.id}`)
            .then(response => {setStarwars(response.data)})
            .catch(error => {setError("These aren't the droids you're looking for!")})
    }, [props.id])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        error ?
                        <div>
                            <h3>{error}</h3> 
                            <img src={errornobi} style={{height: 450, width: 750 }} alt="logo"/> 
                        </div>
                                :
                        <div>
                            <h4>Name: {starwars.name}</h4>
                            <h4>Model: {starwars.model}</h4>
                            <h4>Passengers: {starwars.passengers}</h4>
                            <h4>Type of Vehicle: {starwars.vehicle_class}</h4>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default VehicleDisplay;