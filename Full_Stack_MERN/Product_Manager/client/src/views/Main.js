import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {

    const [product, setProduct] = useState([]);
    // Hiding HTML until request has been made succesful
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
        })
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    return (
        <div>
            <ProductForm product={product} setProduct={setProduct}/>
            <div className="pt-5">
                <h2 className="pb-3">All Products</h2>
                {loaded && <ProductList product = {product} removeFromDom={removeFromDom}/>}
            </div>
        </div>
    )
}