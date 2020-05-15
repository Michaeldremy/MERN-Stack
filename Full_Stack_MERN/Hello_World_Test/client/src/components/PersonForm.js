import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit = {onSubmitHandler}>
                <div className="container">
                    <div className="row text-center pt-5">
                        <div className="col-12 pt-3">
                            <label>First Name:</label>
                            <input type="text" onChange = {(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="col-12 pt-3">
                            <label>Last Name:</label>
                            <input type="text" onChange = {(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className="col-12 pt-3">
                            <button type ="submit" className="btn btn-primary">Create User</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}