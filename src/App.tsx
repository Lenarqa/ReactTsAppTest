import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["Hello", "World!"]} />
    </div>
  );
}

export default App;
