import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectForm from '../components/ProjectForm';
import { navigate } from '@reach/router';
import axios from 'axios';

export default props => {

    const {project, setProject} = props;

    return(
        <div>
            <div>
                <ProjectForm/>
            </div>
        </div>
    )
}