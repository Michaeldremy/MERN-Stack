import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorForm from '../components/AuthorForm';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default () => {
    
    const createAuthor = auth => {
        axios.post('http://localhost:8000/api/newauthor/', auth)
        .then(res => {
            navigate('/')
        }, [])
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <h2>Favorite Authors</h2>
                <Link to="/">Home</Link>
            </div>
            <div>
                <AuthorForm onSubmitProp={createAuthor} initialName=""/>
            </div>
        </div>
    )
}