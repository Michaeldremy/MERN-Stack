import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

export default () => {

    const [pet, setPet] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("")
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState([]);

    const createPet = () => {
        axios.post('http://localhost:8000/api/newpet/', {
            name: name,
            type: type,
            description: description,
            skillOne: skillOne,
            skillTwo: skillTwo,
            skillThree: skillThree
        })
        .then (res => {
            setPet([...pet, res.data]);
            navigate('/');
        })
        .catch(err => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        createPet({name, type, description, skillOne, skillTwo, skillThree});
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <h1>Pet Shelter</h1>
                </div>
                <div className="col-3 pt-3">
                    <Link to ="/">back to Home</Link>
                </div>
                <div className="col-12">
                    <h3>Know a pet needing a home?</h3>
                </div>
            </div>
            <form onSubmit = {onSubmitHandler}>
                <div className="row pt-5">
                    <div className="col-6">
                        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                        <label htmlFor="name">Pet Name:</label>
                        <br/>
                        <input type="text" name="name" value={name} onChange ={e => setName(e.target.value)}/>
                    </div>
                <div className="col-6">
                    <h4>Skills (optional)</h4>
                    <label htmlFor="skillOne">Skill 1</label>
                    <br/>
                    <input type="text" name="skillOne" value={skillOne} onChange ={e => setSkillOne(e.target.value)}/>
                </div>
                </div>
                <div className="row pt-4">
                    <div className="col-6">
                        <label htmlFor="type">Pet Type:</label>
                        <br/>
                        <input type="text" name="type" value={type} onChange ={e => setType(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="skillTwo">Skill 2</label>
                        <br/>
                        <input type="text" name="skillTwo" value={skillTwo} onChange ={e => setSkillTwo(e.target.value)}/>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-6">
                        <label htmlFor="skidescriptionlls">Pet description</label>
                        <br/>
                        <input type="text" name="description" value={description} onChange ={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="skillThree">Skill 3</label>
                        <br/>
                        <input type="text" name="skillThree" value={skillThree} onChange ={e => setSkillThree(e.target.value)}/>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-6">
                        <button>Add Pet</button>
                    </div>
                </div>
            </form>
        </div>
    )
}