import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from '@reach/router';

export default props => {

    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return(
        <div className="container">
            <form onSubmit ={onSubmitHandler}>
                <div className="row text-center pt-3">
                    <div className="col-12 text-center">
                        <label>Author Name: </label>
                        <input type="text" 
                        name="name" 
                        value={name}
                        onChange ={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col-12 pt-3 text-center">
                        <Link to="/"><button type="submit" className="btn btn-primary mr-5">Cancel Creation</button></Link> 
                        <button type="submit" className="btn btn-primary ml-5">Add a Author</button>
                    </div>
                </div>
            </form>
        </div>
    )
}