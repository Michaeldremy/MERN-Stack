import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import {Link} from '@reach/router';

export default () => {

    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then(res => setAuthor(res.data))
    }, [])

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }

    return(
        <div>
            <div className="col-6 pt-3" style={{marginLeft:"auto", marginRight:"auto"}}>
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            {author.map((authors, i) => {
                                return <div key={i} className="pt-3 mb-2">
                                        {authors.name}
                                    </div>  
                                })
                            }
                            </td>
                            {author.map((authors, i) => {
                                return <div key={i} className="pt-3">
                                    <Link to={"/author/" + authors._id + "/edit"}><button type="submit" className="btn btn-primary mr-5">Edit</button></Link> 
                                    <DeleteButton authorId={authors._id} successCallback={() => removeFromDom(authors._id)}/>
                                    </div>
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}