import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { navigate } from '@reach/router';

export default (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newproduct/', {
            title,
            price,
            description
        })
            .then(res => {console.log(res)
            // This is copying the list and adding the new item to the list aka appending to the end of the list.
            setProduct([...product, res.data])})
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <form onSubmit = {onSubmitHandler}>
                <div className="row text-center pt-4">
                    <div className="col-12 pt-3">
                        <label>Title: </label>
                        <input type="text" onChange ={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="col-12 pt-3">
                        <label>Price: </label>
                        <input type="number" step="0.01" onChange ={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="col-12 pt-3">
                        <label>Description: </label>
                        <input type="text" onChange ={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="col-12 pt-3">
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}