import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

export default props => {

    const {id} = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
        .then(res => {
            setAuthor(res.data);
            setLoaded(true);
        })
    }, [id])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
        .then(res => console.log(res));
        navigate('/')
    }

    return (
        <div>
            <h1>Update an Author</h1>
            {loaded &&
            <AuthorForm 
            onSubmitProp ={updateAuthor}
            initialName = {author.name}
            />
            }
        </div>
    )
}