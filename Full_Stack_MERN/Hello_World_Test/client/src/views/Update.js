import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';
export default props => {

    const { id } = props;
    // Used to pass firstName and lastName but now we are just making state with person
    // which contains all the properties of a person class
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [id])

    const updatePerson = person => {
        // At the endof line 24 we are passing in our person object/class
        axios.put('http://localhost:8000/api/person/' + id, person)
            .then(res => console.log(res));
            navigate("/person")
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>
                Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm
                        // We are passing a function called updatePerson through the onSubmitProp
                        // Also passing person.firstName and person.lastName through initialFirstName and initialLastName
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                    {/* Here we are passing through the id through the DeleteButton component and then if it is successful we will navigate to the base-route */}
                    <div style={{marginTop: 25}}>
                        <DeleteButton personId={person._id} successCallback={() => navigate("/person")} />
                    </div>
                </>
            )}
        </div>
    )
}

