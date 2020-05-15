import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Styles/Detail.css'
export default props => {
    const [person, setPerson] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson({
                ...res.data
            }))
    }, [props.id])

    return (
        <div style={{textAlign:"center"}} className="pt-5">
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    )
}