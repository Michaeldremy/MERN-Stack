import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import {Link} from '@reach/router';

export default ({successCallback}) => {

    const [project, setProject] = useState([])

    const updateProjectProgress = (id, statusChange) => {

        axios.put(`http://localhost:8000/api/project/${id}`, {"status": statusChange})
            .then(res => {
                console.log(project)
            })
            .catch(err => {
                console.log(err)
            }, [project])
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/project')
        .then(res => setProject(res.data))
    }, [])

    const removeFromDom = projectId => {
        setProject(project.filter(project => project._id !== projectId));
    }

    return(
    <div className="container">
        <div className="row text-center">
            <div className="col-12">
                <h1>Project Manager</h1>
            </div>
            <div className="col-12 pt-3">
            <h4><Link to ="project/new">Create a New Project</Link></h4>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-4">
                <h3 style={{color: "blue"}}>Backlog</h3>
            </div>
            <div className="col-4">
                <h3 style={{color: "orange"}}>In Progress</h3>
            </div>
            <div className="col-4">
                <h3 style={{color: "green"}}>Completed</h3>
            </div>
        </div>
            {project.map((theProjects, i) =>
            <div key={i}>
                {theProjects.status === "notStarted" ?
                <div className="row">
                <div className="col-4">
                        <h5>Project Name: {theProjects.name}</h5>
                        <h5>Due Date: {theProjects.date}</h5>
                        <h5>{theProjects.inProgress}</h5>
                        <button onClick = {(e)=>{updateProjectProgress(theProjects._id, "inProgress")}}>Start Project</button>
                </div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                </div>
                    :
                    theProjects.status === "inProgress" ?
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                                <h5>Project Name: {theProjects.name}</h5>
                                <h5>Due Date: {theProjects.date}</h5>
                                <h5>{theProjects.inProgress}</h5>
                                <button onClick = {(e)=>{updateProjectProgress(theProjects._id, "Completed")}}>Move to Completed</button>
                        </div>
                        <div className="col-4"></div>
                    </div>
                        :
                        theProjects.status === "Completed" ?
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4"></div>
                            <div className="col-4">
                                <h5>Project Name: {theProjects.name}</h5>
                                <h5>Due Date: {theProjects.date}</h5>
                                <h5>{theProjects.inProgress}</h5>
                                <DeleteButton projectId ={theProjects._id} successCallback={() => removeFromDom(theProjects._id)}/>
                            </div>
                        </div>
                        :
                        ""
                    }  
            </div>
            )}
    </div>
    )
}