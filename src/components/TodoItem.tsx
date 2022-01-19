import React from "react";
import classes from "./Todo.module.css";

const TodoItem: React.FC<{ id: string, text: string, onRemoveTodo: () => void}> = (props) => {
  return <li onClick={props.onRemoveTodo} className={classes.item}>{props.text}</li>;
};

export default TodoItem;
