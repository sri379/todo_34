import React, { useState, useEffect } from 'react';
import './styles.css';

function Input({ tasks, setTask }) {
  const [inputValue, setInputValue] = useState('');

  const newTask = () => {
    if (inputValue.trim() !== '') {
      const newTaskList = [...tasks];
      newTaskList.push(inputValue);
      setTask(newTaskList);
      setInputValue('');
    }
  }

  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  return (
    <div > {/* Apply the centered style */}
      <h3 className="center-container">TodoInput</h3>
      <input className='input-field'
        type='text'
        placeholder="add to do"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <button
          className="add-button" 
          onClick={newTask}
        >
          ADD NEW TASK
        </button>
      </div>
    </div>
  )
}

export default Input;