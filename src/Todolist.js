import React, { useState } from 'react';
import Input from './Input';
import Display from './Display';
import Filter from './Filter';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState({});

  const toggleChecked = (index) => {
    const updatedCompletedTasks = { ...completedTasks };
    updatedCompletedTasks[index] = !updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);

    console.log('Completed Tasks:', updatedCompletedTasks);
  }
  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }
  return (
    <div>
      <Input tasks={tasks} setTask={setTasks} />
      <Filter/>
      <Display tasks={tasks} setTasks={setTasks} completedTasks={completedTasks} toggleChecked={toggleChecked} deleteTask={deleteTask}/>
      
    </div>
  );
}

export default Todolist;
