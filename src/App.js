import React from "react";
import Input from "./components/Input";
import VisibleTodoList from "./components/VisibleTodoList";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <div className="app">
      <VisibleTodoList />
      <Input />
      <Posts />
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=tBigGpLRMtU
// npx create-react-app . --template redux
