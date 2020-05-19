import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorForm from '../components/AuthorForm';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default () => {

    const [errors, setErrors] = useState([]);
    
    const createAuthor = auth => {
        axios.post('http://localhost:8000/api/newauthor/', auth)
        .then(res => {
            navigate('/')
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <div>
                <h2>Favorite Authors</h2>
                <Link to="/">Home</Link>
            </div>
            <div>
                {errors.map((err, index) => <p key={index} style={{color: "red"}} className="pt-3">{err}</p>)}
                <AuthorForm onSubmitProp={createAuthor} initialName=""/>
            </div>
        </div>
    )
}