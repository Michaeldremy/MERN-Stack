import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default () => {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const status = "notStarted";

    const createProject = proj => {
        axios.post('http://localhost:8000/api/newproject/', proj)
        .then(res => {
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        createProject({name, date, status});
    }

    return(
        <div className="container">
            <form onSubmit ={onSubmitHandler}>
                <div className="row text-center pt-3">
                    <div className="col-12">
                        <h1>Project Manager</h1>
                        <Link to ="/">Dashboard</Link>
                    </div>
                    <div className="col-12 pt-2">
                        <h4>Plan a new Project</h4>
                    </div>
                    <div className="col-12 pt-2">
                        <label>Project:</label>
                        <input type="text"
                        name="name"
                        value={name}
                        onChange ={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col-12 pt-2">
                        <label>Due Date:</label>
                        <input type="date"
                        name="date"
                        value={date}
                        onChange ={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className="col-12">
                        <button type="submit">Plan Project</button>
                    </div>
                </div>
            </form>
        </div>
    )
}