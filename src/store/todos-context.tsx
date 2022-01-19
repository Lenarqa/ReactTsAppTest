import React, { useState } from "react";
import Todo from "../models/todo";

type contextObject = {
  items: Todo[];
  addTodo: (inputText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<contextObject>({
  items: [],
  addTodo: (inputText: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (inputText: string) => {
    let newTodo: Todo = new Todo(inputText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== todoId);
    });
  };

  const contextValue: contextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
