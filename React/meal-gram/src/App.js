import React, { useState, useEffect} from 'react';
import './App.css';
import Meal from './components/Meal';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mealList, setMealList] = useState([]);


  return (
    <div className="App">
      <h2>Welcome to MealGram!</h2>
      {mealList.map( (meal, i) => (
        <Meal mealList = {mealList} setMealList={setMealList} index={i} meal={meal}/>
      ))}
      <Input mealList = {mealList} setMealList = {setMealList}/>
    </div>
  );
}

export default App;
