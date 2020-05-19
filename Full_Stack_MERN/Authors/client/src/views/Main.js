import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from '@reach/router';
import AuthorList from '../components/AuthorList';

export default props => {

    const {author, setAuthor} = props;

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <div>
                <h2>Favorite Authors</h2>
                <Link to ="/newauthor/">Add an author</Link>
                <p>We have quotes by:</p>
            </div>
            <div>
                <AuthorList author={author} setAuthor={setAuthor} removeFromDom={removeFromDom}/>
            </div>
        </div>
    )
}