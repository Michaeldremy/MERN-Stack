import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {

    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    return (
        <div className="container">
            <form onSubmit = {onSubmitHandler}>
                <div className="row text-center pt-4">
                    <div className="col-12 pt-3">
                        <label>Title: </label>
                        <input type="text" 
                        name="title"
                        value={title}
                        onChange ={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="col-12 pt-3">
                        <label>Price: </label>
                        <input type="number" step="0.01" 
                        name="price"
                        value={price}
                        onChange ={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="col-12 pt-3">
                        <label>Description: </label>
                        <input type="text" 
                        name="description"
                        value={description}
                        onChange ={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="col-12 pt-3">
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}