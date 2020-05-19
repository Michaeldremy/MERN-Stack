import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

export default props => {

    const {id} = props;

    const [loaded, setLoaded] = useState(false);
    // We are just updating a single author which is why we are calling it "thisOneAuthor" in the state, also we are passing an author object
    const [thisOneAuthor, setThisOneAuthor] = useState({});
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
        .then(res => {
            setThisOneAuthor(res.data);
            setLoaded(true);
        })
    }, [id])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
        .then(res => {
            console.log(res)
        // navigate('/')
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
            <h1>Update an Author</h1>
            <div>{errors.map((err, index) => <p key={index} style={{color: "red"}} className="pt-3">{err}</p>)}</div>
            {loaded && 
            <AuthorForm 
            onSubmitProp ={updateAuthor}
            initialName = {thisOneAuthor.name}
            />
            }
        </div>
    )
}