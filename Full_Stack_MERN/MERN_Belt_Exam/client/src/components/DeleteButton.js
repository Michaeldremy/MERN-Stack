import React from 'react'
import axios from 'axios';

export default props => {
    
// Don't forget to change the enterNameId before proceeding
    const { enterNameId, successCallback } = props;
    
    const deleteAuthor = e => {
// The axios line needs to be changed to the right API call to our backend!
        axios.delete('http://localhost:8000/api/author/' + enterNameId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="btn btn-primary" onClick={deleteAuthor}>
            Delete
        </button>
    )
}