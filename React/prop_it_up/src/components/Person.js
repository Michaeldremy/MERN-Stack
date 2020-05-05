import React, { Component } from 'react';

class Person extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    countBday = () => {
        this.setState({age: this.state.age + 1})
    }
    render(){
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = { this.countBday }>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default Person;