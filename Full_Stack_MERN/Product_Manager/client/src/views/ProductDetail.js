import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';
import {navigate} from '@reach/router';

export default props => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/` + props.id)
        .then(res => setProduct({
            ...res.data
        }))
    }, [])

    return(
        <div style={{textAlign:"center"}} className="pt-5">
            <h2><span style={{color:"Red"}}>{product.title}</span></h2>
            <h2>Price: ${product.price}</h2>
            <h2>Description: {product.description}</h2>
            <h2><Link to={"/product/" + product._id + "/edit"}>
                Edit Product
                </Link></h2>
                {/* Here are just deleting the product and navigating back to the base route */}
                <DeleteButton productId={product._id} successCallback={() => navigate('/')}/>
        </div>
    )
}