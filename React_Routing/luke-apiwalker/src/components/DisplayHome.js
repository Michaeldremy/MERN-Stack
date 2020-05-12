import React, {useState, useEffect} from 'react';
import {Link, Router, useParams} from '@reach/router';
import { navigate } from '@reach/router';

const DisplayHome = (props) => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(category,id)
        navigate(`/${category}/${id}`)
        document.getElementById("categoryID").value = "";
        document.getElementById("theID").value = "";
    }

    return(
    <div className="container">
        <div className="row pt-5 pb-5">
            <form className="form-inline" onSubmit ={onSubmit}>
                <div className="form-group mb-1 pr-4">
                    <label htmlFor="">Search for:</label>
                </div>
                    <select className="form-control mr-4" id="categoryID" onChange = { (e) => setCategory (e.target.value) }>
                        <option value="">Select Option</option>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="planets">Planets</option>
                    </select>
                <div className="form-group mb-1 pr-4">
                    <label>ID:</label>
                </div>
                <div>
                    <input type="number" className="form-control" id="theID"  onChange = { (e) => setId (e.target.value) }/>
                </div>
                <div className="form-group ml-4">
                    <button type="submit"  className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default DisplayHome;