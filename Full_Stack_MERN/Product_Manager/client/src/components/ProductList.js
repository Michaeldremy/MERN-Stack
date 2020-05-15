import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {
    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
        .then(res => {
            removeFromDom(productId)
        })
    }

    return (
        <div>
            {props.product.map((product, idx)=>{
                return <div key={idx}><h3>
                    <Link to={`/product/${product._id}`}>
                        {product.title}
                    </Link></h3>
                    <button onClick={ (e) =>{deleteProduct(product._id)}} className="btn btn-primary mt-2 mb-4">
                        Delete
                    </button>
                </div>
            })}
        </div>
    )
}