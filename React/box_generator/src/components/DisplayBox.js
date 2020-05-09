import React, { useState }from 'react';

const DisplayBoxes = (props) => {
    return (
        <div>
            {props.color.map( (BoxColor, i) =>                 
                <div key={i} style={{
                    display: 'inline-block',
                    height:'100px',
                    width:'100px', 
                    margin: '1em',
                    background:`${BoxColor}`
                }}></div>
                )
            }
        </div>
        
    );
};


export default DisplayBoxes;