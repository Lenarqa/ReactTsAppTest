import React, {useContext} from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";


const Todos: React.FC = () => {
    const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
