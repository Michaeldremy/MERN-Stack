import React, { useState }from 'react';

const UserForm = (props) => {
    const { inputs, setInputs} = props;
    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmpwError, setConfirmPWError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName: inputs.firstName, lastName: inputs.lastName, email: inputs.email, password: inputs.password, confirmpw: inputs.confirmpw };
        // inputs.firstName("");
        // inputs.setlastName("");
        // inputs.setEmail("");
        // inputs.setPassword("");
        // inputs.setConfirmPW("");
        console.log("Welcome", newUser);
    }

    const fromValidation = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        if (e.target.name === "firstName") {
            if (e.target.value < 1) {
                setFirstNameError("First name is required!");
            }
            else if (e.target.value.length < 2) {
                setFirstNameError("First name must be atleast 2 characters!")
            }
            else (setFirstNameError (""));
        }

        if (e.target.name === "lastName") {
            if(e.target.value < 1) {
                setLastNameError("Last name is required!");
            }
            else if (e.target.value.length < 2) {
                setLastNameError("Last name must be atleast 2 characters!")
            }
            else (setLastNameError (""));
        }

        if (e.target.name === "email") {
            if(e.target.value < 1) {
                setEmailError("Email is required")
            }
            else if (e.target.name === "email" && e.target.value.length <5) {
                setEmailError("Email must be longer than 5 characters!")
            }
            else (setEmailError (""));
        }

        if (e.target.name === "password") {
            if(e.target.value < 1) {
                setPasswordError("Password is required!")
            }
            else if (e.target.value !== inputs.confirmpw) {
                setConfirmPWError("Passwords must match!")
            }
            else if (e.target.name === "password" && e.target.value.length < 8) {
                setPasswordError("Password must be atleast 8 characters!")
            }
            else(setPasswordError(""));
        }

        if (e.target.name === "confirmpw") {
            if (e.target.value < 1) {
                setConfirmPWError("Please confirm your password!")
            }
            else if (e.target.name === "confirmpw" && e.target.value.length < 8) {
                setConfirmPWError("Confirm Password must be atleast 8 characters!")
            }
            else if (e.target.value !== inputs.password) {
                setConfirmPWError("Passwords must match!")
            }
            else(setConfirmPWError("")) 
        }
    }
    
    return(
        <div>
        <form onSubmit = { createUser }>
            <div>
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p>:
                    ''
                    }
                <label>First Name: </label>
                <input type="text" name="firstName" onChange = {fromValidation}/>
            </div>
            <div>
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{ lastNameError }</p>:
                    ''
                    }
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange = {fromValidation}/>
            </div>
            <div>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p>:
                    ''
                    }
                <label>Email: </label>
                <input type="text" name="email" onChange = {fromValidation}/>
            </div>
            <div>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p>:
                    ''
                    }
                <label>Password: </label>
                <input type="text" name="password" onChange = {fromValidation}/>
            </div>
            <div>
                    {
                        confirmpwError ?
                        <p style={{color:'red'}}>{ confirmpwError }</p>:
                    ''
                    }
                <label>Confirm Password: </label>
                <input type="text" name="confirmpw" onChange = {fromValidation}/>
            </div>
            <div>
                <input type="submit" value="Create User"/>
            </div>
        </form>
            <div>
                <h2>First Name: {inputs.firstName}</h2>
                <h2>Last Name: {inputs.lastName}</h2>
                <h2>Email: {inputs.email}</h2>
                <h2>Password: {inputs.password}</h2>
                <h2>Confirm Password: {inputs.confirmpw}</h2>
            </div>
        </div>
        
    );
};

export default UserForm;