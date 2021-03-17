import React, { useEffect, useState } from "react";
import "./TodoItem.css";
import { Checkbox, makeStyles, TextField } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import {
  setCompleted,
  deleteTodo,
  updateTodo
} from "../features/todo/todoSlice";

const TodoItem = ({ text, completed, id }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    setChecked(e.target.checked);
    dispatch(setCompleted(id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(id));
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id, text: e.target.value }));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={checked || completed}
        onChange={handleCheck}
        color="primary"
      />
      <TextField
        onChange={handleChange}
        value={text}
        name="text"
        className={completed && "todoItem--done"}
      >
        {text}
      </TextField>
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
