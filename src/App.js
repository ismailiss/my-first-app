import React from "react";
import "./App.css";
import Title from "./components/title";
import Form from "./form";

function App() {
  return (
    <div className="App">
      <Title style={{ fontSize: "24px" }}>My todo list</Title>
      <Form />

      <Title>Vision consulting 2020</Title>
    </div>
  );
}

export default App;
