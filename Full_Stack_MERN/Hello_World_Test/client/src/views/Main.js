import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/person/')
            .then(res =>{ 
                setPeople(res.data)
                setLoaded(true);
            });
    }, [])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }

    // This createPerson function is copying the list of people in our database and then adding the new person who gets created and adds to the copied list
    const createPerson = person => {
        axios.post('http://localhost:8000/api/person/', person)
            .then(res=>{
                setPeople([...people, res.data]);
            })
    }

    return (
        <div>
            {/* Line 33 is now being passed the onSubmitProp which is referencing the createPerson function and then we are */}
            {/* setting initialFirstName and initialLastName to an empty string */}
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
            <hr/>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}
