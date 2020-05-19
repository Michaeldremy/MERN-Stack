import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
// line 7 is new three item being set as props
const { initialFirstName, initialLastName, onSubmitProp } = props;
// line 9 & 10 we are setting state to the first two props above
const [firstName, setFirstName] = useState(initialFirstName);
const [lastName, setLastName] = useState(initialLastName);

const onSubmitHandler = e => {
    e.preventDefault();
    // Line 15 we are using the last of the 3 new props which has an object of firstName and lastName passed through it
    onSubmitProp({firstName, lastName});
}

    return (
        <div style={{textAlign:"center"}}>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br />
                    <input 
                        type="text" 
                        name="firstName" value={firstName} 
                        onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input 
                        type="text" 
                        name="lastName" 
                        value={lastName} 
                        onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}