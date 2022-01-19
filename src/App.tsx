import React from "react";
import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (inputText: string) => {
    let newTodo:Todo = new Todo(inputText);

    setTodos(prevState => {
      return prevState.concat(newTodo);
    });

  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
