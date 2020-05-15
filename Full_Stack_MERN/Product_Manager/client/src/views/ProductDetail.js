import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setProduct({
            ...res.data
        }))
    }, [props.id])

    return(
        <div style={{textAlign:"center"}} className="pt-5">
            <h2 style={{color:"Red"}}>Title: {product.title}</h2>
            <h2>Price: ${product.price}</h2>
            <h2>Description: {product.description}</h2>
        </div>
    )
}