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

    const createProduct = prod => {
        axios.post('http://localhost:8000/api/newproduct/', prod)
        .then(res => {
            setProduct([...product, res.data])
        })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <div className="pt-5">
                <h2 className="pb-3">All Products</h2>
                {/* We are passing ProductList the product and setProduct state as well as the removeFromDom function */}
                {loaded && <ProductList product = {product} setProduct = {setProduct} removeFromDom={removeFromDom}/>}
            </div>
        </div>
    )
}