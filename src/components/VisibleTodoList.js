import React from "react";
import { useSelector } from "react-redux";
import { listOfTodos } from "../features/todo/todoSlice";
import TodoItem from "./TodoItem";

const VisibleTodoList = () => {
  const list = useSelector(listOfTodos);

  return (
    <div>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default VisibleTodoList;
// https://github.com/reduxjs/redux-toolkit/blob/e85eb17b39a2118d859f7b7746e0f3fee523e089/docs/tutorials/intermediate-tutorial.md

// https://dev.to/gsto/new-redux-hooks-a-before-and-after-comparison-are-they-better-loj

// https://redux-toolkit.js.org/tutorials/quick-start#what-youve-learned
