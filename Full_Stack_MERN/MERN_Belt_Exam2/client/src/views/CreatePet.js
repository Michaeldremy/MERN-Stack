import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../components/Form';

export default props => {

    const {pet, setPet} = props;

    return(
        <div>
            <Form />
        </div>
    )
}