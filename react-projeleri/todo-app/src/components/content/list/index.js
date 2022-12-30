import React from "react";
import { useToDo } from "../../../contexts/ToDoContext";
import ListItem from "./ListItem";

let filtered = null;

const List = () => {
  const { todos, filter } = useToDo();

  filtered = todos;

  if(filter !== "all") {
    filtered = todos.filter((todo) => 
      filter === "active" 
      ? todo.completed === false && todo 
      : todo.completed === true && todo 
    )
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default List;
