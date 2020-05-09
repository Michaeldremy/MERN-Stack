import React, { useState }from 'react';

const BoxGenerator = (props) => {
    const [ Box, setBox ] = useState("");

    const CreateBox = (e) => {
        e.preventDefault();
        props.passedProp ( Box );
        setBox("");
    }

    return (
        <div>
            <form onSubmit = {CreateBox}>
                <div className="container">
                    <div className="row pt-5 text-center">
                        <div className="col-12">
                        <label htmlFor="color">Color</label>
                        </div>
                        <div className="col-12">
                        <input type="text" name="color" placeholder="Enter Box Color" onChange = { (e) => setBox(e.target.value) } value= { Box }/>
                        </div>
                        <div className="col-12 pt-3">
                        <input type="submit" value="Add colored box!"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BoxGenerator;