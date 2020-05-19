import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {

    // Here we are renaming the props we passed over from Main.js
    const {product, setProduct, removeFromDom} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res => setProduct(res.data))
    }, [])

    return (
        <div>
            {product.map((product, idx)=>{
                return <div key={idx}><h3>
                    <Link to={`/product/${product._id}`}>
                        {product.title}
                    </Link></h3>
                    {/* Here we are deleting the product from the list and refreshing the page to show the deletion */}
                    <DeleteButton productId={product._id} successCallback={()=> removeFromDom(product._id)}/>
                </div>
            })}
        </div>
    )
}