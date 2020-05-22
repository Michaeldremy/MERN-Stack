import React from 'react'
import axios from 'axios';

export default props => {
    
// Don't forget to change the enterNameId before proceeding
    const { projectId, successCallback } = props;
    
    const deleteProject = e => {
// The axios line needs to be changed to the right API call to our backend!
        axios.delete('http://localhost:8000/api/project/' + projectId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="btn btn-primary" onClick={deleteProject}>
            Delete
        </button>
    )
}