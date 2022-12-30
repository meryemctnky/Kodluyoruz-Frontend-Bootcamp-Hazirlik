import { createContext, useContext, useState } from "react";
import { uid } from "react-uid";

export const ToDoContext = createContext();

const ToDoProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      newToDo: "Learn React",
      completed: true,
    },
  ]);
  const [filter, setFilter] = useState("all");

  const addToDo = (newToDo) => {
    setTodos((prev) => [
      ...prev,
      { id: uid(newToDo), newToDo, completed: false },
    ]);
  };

  const toggleToDo = (id) => {
    const clone_todos = [...todos];
    const itemIndex = clone_todos.findIndex((item) => item.id === id);
    const item = todos[itemIndex];
    item.completed = !item.completed;

    setTodos(clone_todos);
  };

  const destroyToDo = (id) => {
    const clone_todos = [...todos];
    const new_todos = clone_todos.filter((item) => item.id !== id);
    setTodos(new_todos);
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        setTodos,
        addToDo,
        toggleToDo,
        destroyToDo,
        filter,
        setFilter,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export const useToDo = () => {
  const context = useContext(ToDoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside ToDoProvider component");
  }
  return context;
};

export default ToDoProvider;
