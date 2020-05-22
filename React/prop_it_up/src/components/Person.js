import React, { useState } from 'react';

// Lines 5 - 14 is using functional components and is displaying information without a button click for incrementanting the age + 1.

const Person = props => {
    const [state, setState] = useState({
        age: props.age
    });

    const handleAgeClick = () => {
        setState({
            age: state.age + 1
        });
        console.log(state.age)
    }
    return (
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {state.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = {handleAgeClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

// Code below is displaying the information with the use of State and Classes.

// class Person extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             age: this.props.age
//         };
//     }
//     countBday = () => {
//         this.setState({age: this.state.age + 1})
//     }
//     render(){
        // const {firstName, lastName, hairColor} = this.props;
//         return(
//             <div>
//                 <h1>{firstName}, {lastName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 <p>Hair Color: {hairColor}</p>
//                 <button onClick = { this.countBday }>Birthday Button for {firstName} {lastName}</button>
//             </div>
//         );
//     }
// }

export default Person;