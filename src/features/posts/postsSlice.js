import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  hasErrors: false,
  posts: []
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async ({ limit }, { dispatch, getState }) => {
    // const { todos } = getState(); // can get entire state

    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    ).then((response) => response.json());
    // .catch(error => dispatch(errorMsg({message: error})) //can dispatch other functions
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.status]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fylfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = "success";
    },
    [getPosts.status]: (state, action) => {
      state.status = "failed";
    }
  }
});

export default postsSlice.reducer;
// https://redux-toolkit.js.org/api/createAsyncThunk
// Rowadz on YouTube
