import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

export default props => {

    const { id } = props;
    const [product, setProduct] = useState();
    // We need to have a loaded to get information from our backend API call
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log(res));
            // On submission of the form we are going to go back to the base route
            navigate('/')
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <div>
                    <ProductForm 
                    onSubmitProp = {updateProduct}
                    initialTitle = {product.title}
                    initialPrice = {product.price}
                    initialDescription = {product.description}
                    />
                    <div style={{marginTop: 25}}>
                        {/* Here we are deleting the product and navigating back to the base route */}
                        <DeleteButton productId ={product._id} successCallback={() => navigate('/')}/>
                    </div>
                </div>
            )}
        </div>
    )
}
