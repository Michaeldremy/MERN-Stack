import React, {useState} from 'react';
import { render } from '@testing-library/react';
import likeone from './likeone.png';

const Meal = (props) => {
    const {mealList, setMealList, index, meal} = props;

    const onClick = () => {
        setMealList( () =>
        mealList.filter(meal => mealList.indexOf(meal) !== index));
    }

    const onChange = () => {
        mealList[index].isComplete = !mealList[index].isComplete;
        setMealList([...mealList]);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {
                        meal.isComplete ?
                        <h3>{meal.name}<img src={likeone} style={{marginLeft: 20, height: 30, width: 30}} alt="like"/></h3>
                        :
                        <h3>{meal.name}</h3>
                    }
                </div>
                <div className="col-1 pt-2">
                    {/* <h4 onChange = {onChange} type="textInput" checked={meal.isComplete}>Like</h4> */}
                    <input onChange={onChange}
                    checked={meal.isComplete}
                    type="checkbox"/>
                </div>
                    <div className="col-2">
                    <button type="submit" className="btn btn-danger float-right" style={{marginLeft: 20}} onClick = {onClick}>Delete</button>
                    </div>
            </div>
        </div>
    )
}

export default Meal;