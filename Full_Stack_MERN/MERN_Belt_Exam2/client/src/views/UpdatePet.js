import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {

    const {getPets} = props;
    const [pet, setPet] = useState({});
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("")
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => {
                setPet(res.data);
                setName(res.data.name);
                setType(res.data.type)
                setDescription(res.data.description)
                setSkillOne(res.data.skillOne)
                setSkillTwo(res.data.skillTwo)
                setSkillThree(res.data.skillThree)
            })
    }, [])

    const UpdateHandler = (e) => {
        e.preventDefault();
        console.log(pet)
        axios.put(`http://localhost:8000/api/pet/${pet._id}`, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
        .then(res => {
            navigate('/');
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <h1>Pet Shelter</h1>
                </div>
                <div className="col-3">
                    <Link to ="/">back to Home</Link>
                </div>
                <div className="col-12">
                    <h3>Edit {pet.name}</h3>
                </div>
            </div>
            <form onSubmit = {UpdateHandler}>
                <div className="row pt-5">
                    <div className="col-6">
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