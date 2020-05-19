import React, { useEffect, useState } from 'react'
import {Link} from '@reach/router';
import axios from 'axios';
import '../Styles/Detail.css'
export default props => {
    const [person, setPerson] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/person/" + props.id)
            .then(res => setPerson({
                ...res.data
            }))
    }, [])

    return (
        <div style={{textAlign:"center"}} className="pt-5">
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <Link to={"/person/" + person._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}