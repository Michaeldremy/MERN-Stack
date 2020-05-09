import React, {useState} from 'react';

const Input = (props) => {
    const {mealList, setMealList} = props;
    let meal = {
        name: "",
        isComplete: false
    }

    const onClick = (e) => {
        setMealList([...mealList,meal]);
        e.target.value = "";
        document.getElementById('mealInput').value = "";
    };

    const onChange = (e) => {
        meal.name = e.target.value;
        
    }
    
    return (
        <div className="container">
            <div className="row pt-5 text-center">
                <div className="col-12">
                    <input onChange ={onChange} 
                    type="text" 
                    name="meal"
                    id="mealInput"
                    className="text-center"
                    placeholder="Enter a meal!"/>
                </div>
                <div className="col-12 pt-3">
                    <button 
                    onClick ={onClick}
                    className="btn btn-primary">
                    Add Meal</button>
                </div>
            </div>
        </div>
    )
}

export default Input;