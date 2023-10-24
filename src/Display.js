import React from 'react';
const deleteAll = () => {

}
const deleteDone = () => {

}
function Display({ tasks,toggleChecked,completedTasks,deleteTask    }) {
  return (
    <div>
      {/* <ul>
        {tasks.map((task) => (
          <li >
            {task}
          </li>
        ))}
      </ul> */}
        <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={completedTasks[index]}
              onChange={() => toggleChecked(index)}
            />
            <span style={completedTasks[index] ? { textDecoration: "line-through" } : null}>
              {task}
            </span>
            <button className="remove-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      <button className="delete-button" onClick={deleteAll}>deleteAll</button>&nbsp;&nbsp;
      
      <button className="delete-button" onClick={deleteDone}>deleteDone</button>&nbsp;&nbsp;
    </div>
  );
}

export default Display;