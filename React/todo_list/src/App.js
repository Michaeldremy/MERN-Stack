import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Task from './components/Task';
import Input from './components/Input';

function App() {
  const [list, setList] = useState([]);

  // This is pulling localstorage and storing it in data and then if data exists it will display it.
  // This solves issue of refreshing something will wipe out your previous data.
  useEffect(() => {
    const data = localStorage.getItem('my-list');
    if (data) {
      setList(JSON.parse(data))
    }
  }, [])

  // This is using useEffect and is storing our list in local storage called 'my-list'
  useEffect(() => {
    localStorage.setItem('my-list', JSON.stringify(list))
  });

  return (
    <div className="App">
      <h2>Todo List!</h2>
      {list.map( (task, i) => (
      <Task task={task} setList={setList} index={i} list={list}/>
        ))}
      <Input list={list} setList={setList}/>
    </div>
  );
}

export default App;
