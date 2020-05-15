import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';

export default () => {

    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    },[])

    return (
        <div>
            <PersonForm/>
            <div className="pt-5" style={{textAlign:"center"}}>
                {loaded && <PersonList people={people}/>}
            </div>
        </div>
    )
}