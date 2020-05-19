import React from 'react'
import axios from 'axios';

export default props => {
    
    const { productId, successCallback } = props;
    
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="btn btn-primary" onClick={deletePerson}>
            Delete
        </button>
    )
}