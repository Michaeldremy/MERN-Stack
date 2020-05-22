import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {

    const {removeFromDom} = props;

    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
        .then(res => setPet(res.data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-9 pt-2">
                    <h1>Pet Shelter</h1>
                </div>
                <div className="col-3 pt-3">
                    <Link to ="pet/new">Add a Pet to the Shelter</Link>
                </div>
                <div className="col-12 pt-5">
                    <h3>These pets are looking for a good home</h3>
                </div>
            </div>
            <div className="row pt-3">
            <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {pet.map((pets, i) => {
                                    return <div key ={i} className="pt-3 mb-3">
                                        {pets.name}
                                        </div>
                                })}
                            </td>
                            <td>
                            {pet.map((pets, i) => {
                                    return <div key ={i} className="pt-3 mb-3">
                                        {pets.type}
                                        </div>
                                })}
                            </td>
                            <td>
                            {pet.map((pets, i) => {
                                    return <div key ={i} className="pt-3 mb-3">
                                        <Link to ={`/pet/${pets._id}`}>details</Link> | <Link to ={"/pet/" + pets._id + "/edit"}>edit</Link>
                                        </div>
                                })}
                            </td>
                        </tr>
                    </tbody>
            </table>
            </div>
        </div>
    )
}