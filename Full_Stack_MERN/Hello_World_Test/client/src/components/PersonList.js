import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

export default props => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res => setPeople(res.data));
    }, [])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId))
    }

    return (
        <div style={{textAlign:"center"}}>
            {people.map((person, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/person/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        |
                        <Link to={"/person/" + person._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                        <br/>
                        <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                    </p>
                )
            })}
        </div>
    )
}