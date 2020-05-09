import React from 'react';

const Task = (props) => {
    const { task, index, list, setList } = props;

    // This onClick function is filtering through the list based off what item you want to delete.
    // It will find the exact item in the array at it's index.
    const onClick = () => {
        setList( ()  => 
            list.filter(task => list.indexOf(task) !== index));
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-6 float-right">
                    {
                        // line 24, ? represents and if check 
                        task.isComplete === true?
                        <h3 style={{textDecoration: 'line-through', color: 'red'}}>{task.name}</h3> 
                        // : represents an else check
                        :
                        <h3>{task.name}</h3>
                    }
                </div>
                <div className="col-1 pt-2">
                    <input onChange ={onChange}
                    // line 34 is checking the bool of the task whether it is true or false. 
                    checked={task.isComplete} 
                    type="checkbox"/> 
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-danger float-right" style={{marginLeft: 20}} onClick={onClick}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task;