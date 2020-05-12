import React, {useState} from 'react';

const Input = (props) => {
    // This is grabbing the list and we are setting a new variable called "task" with a empty string
    // and setting a property called isComplete to be false. This is done so at the time of creation
    // of the new task it is se to false so we can change that to true to cross it off the list.
    const {list, setList} = props;
        let task = {
            name: "",
            isComplete: false
        }

    const onChange = (e) => {
        task.name = e.target.value;
    }

    // onClick is a function that is going to grab the existing list using "...list" and then adding a new "task" into
    // the existing list of tasks
    const onClick = (e) => {
        setList([...list, task]);
        e.target.value = "";
        document.getElementById('mealInput').value = "";
    };

    return (
        <div className="container">
            <div className="row text-center pt-5">
                <div className="col-12">
                    <input onChange = {onChange} 
                    type="text" 
                    name="task" 
                    placeholder="Enter Task"/>
                </div>
                <div className="col-12 pt-3">
                    <button onClick = {onClick}>Add Task</button>
                </div>
            </div>
        </div>
    )
}

export default Input;