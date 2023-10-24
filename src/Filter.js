import React from 'react';
const filterAll=()=>{

}
const filterDone=()=>{

}
const filterTodo=()=>{

}

function Filter() {
  return (
    <div  > 
      <h3 className='center-container'>Todolist</h3>
      <button className="filter-button" onClick={filterAll}>All</button>&nbsp;&nbsp;
      <button className="filter-button" onClick={filterDone}>Done</button>&nbsp;&nbsp;
      <button className="filter-button" onClick={filterTodo}>ToDo</button>&nbsp;&nbsp;
    </div>
  )
}

export default Filter;