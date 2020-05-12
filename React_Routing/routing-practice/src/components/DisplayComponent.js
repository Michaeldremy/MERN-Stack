import React, {useState} from 'react';
import {Link, useParams} from '@reach/router';

const DisplayComponent = (props) => {
    return(
        <div style={{color:props.textcolor, backgroundColor:props.bgcolor}}>
            {
                isNaN(props.input1) ?
                <h2>The word is: {props.input1}</h2>
                :
                <h2>The number is: {props.input1}</h2>
            }
        </div>
    )
}

export default DisplayComponent;