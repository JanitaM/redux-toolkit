import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import postsReducer from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    posts: postsReducer
  }
});
