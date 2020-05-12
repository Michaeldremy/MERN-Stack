import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const PlanetDisplay = (props) => {
    const [starwars, setStarwars] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => {setStarwars(response.data)})
    }, [props.id])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                        <h4>Name: {starwars.name}</h4>
                        <h4>Terrain: {starwars.terrain}</h4>
                        <h4>population: {starwars.population}</h4>
                        <h4>Diameter: {starwars.diameter}</h4>
                </div>
            </div>
        </div>
    )
}

export default PlanetDisplay;