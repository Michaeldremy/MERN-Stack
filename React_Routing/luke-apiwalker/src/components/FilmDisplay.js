import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const FilmDisplay = (props) => {
    const [starwars, setStarwars] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${props.id}`)
            .then(response => {setStarwars(response.data)})
    }, [props.id])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                        <h4>Characters: {starwars.characters}</h4>
                        <h4>Director: {starwars.director}</h4>
                        <h4>Episode: {starwars.episode_id}</h4>
                        <h4>Created: {starwars.created}</h4>
                </div>
            </div>
        </div>
    )
}

export default FilmDisplay;