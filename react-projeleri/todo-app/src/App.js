import React from "react";
import Content from "./components/content/index";
import Header from "./components/header/index";
import Info from "./components/Info";
import ToDoProvider from "./contexts/ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <div className="todoapp">
        <Header />
        <Content />
      </div>
      <Info />
    </ToDoProvider>
  );
}

export default App;
