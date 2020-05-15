import React from 'react';
import {Link} from '@reach/router';

export default props => {
    return (
        <div>
            {props.product.map((product, idx)=>{
                return <p key={idx}><Link to={`/product/${product._id}`}>{product.title}</Link></p>
            })}

        </div>
    )
}