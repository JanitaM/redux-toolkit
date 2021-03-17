// type rxslice to generate template
import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      prepare(text) {
        return { payload: { text, id: nextTodoId++ } };
      }
    },
    setCompleted: (state, action) => {
      const matchingTodo = state.find((item) => item.id === action.payload);
      if (matchingTodo) matchingTodo.completed = !matchingTodo.completed;
    },
    deleteTodo: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const matchingTodo = state.find((item) => item.id === id);
      if (matchingTodo) matchingTodo.text = text;
    }
  }
});

export const {
  addTodo,
  setCompleted,
  deleteTodo,
  updateTodo
} = todoSlice.actions;

// export current state
export const listOfTodos = (state) => state.todos;

export default todoSlice.reducer;
