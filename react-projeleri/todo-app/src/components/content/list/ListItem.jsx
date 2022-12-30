import React from "react";
import { useToDo } from "../../../contexts/ToDoContext";

const ListItem = ({ todo }) => {
  const { toggleToDo, destroyToDo } = useToDo();
  
  const handleChange = (id) => {
    toggleToDo(id)
  } 
  const handleDestroy = (id) => {
    destroyToDo(id)
  } 

  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)}/>
        <label>{todo.newToDo}</label>
        <button className="destroy" onClick={() => handleDestroy(todo.id)}></button>
      </div>
    </li>
  );
};

export default ListItem;
