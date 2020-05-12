import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const SearchDisplay = (props) => {
    const [starwars, setStarwars] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response => {setStarwars(response.data)})
    }, [props.id])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                        <h4>Name: {starwars.name}</h4>
                        <h4>Hair Color: {starwars.hair_color}</h4>
                        <h4>Height: {starwars.height}</h4>
                        <h4>Gender: {starwars.gender}</h4>
                </div>
            </div>
        </div>
    )
}

export default SearchDisplay;