import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./Input.css";

const Input = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  const onChange = (e) => setTodoText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;

    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={onChange} />
      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
};

export default Input;
