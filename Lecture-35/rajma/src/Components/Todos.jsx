import React from "react";

function Todos() {
  return (
    <div>
      <Todo title="surya namaskaar" task="subha karna hota hai" />
      <Todo title="shaam namaskaar" task="ye kuch nahi hota hai" />
      <Todo title="raat namaskaar" task="raat ko karna hota hai" />
    </div>
  );
}

function Todo({ title, task }) {
  return (
    <div
      style={{
        border: "2px solid black",
        backgroundColor: "lightcoral",
        margin: "20px",
      }}
    >
      <h1>Title: {title} </h1>
      <h1>Task:{task} </h1>
    </div>
  );
}

export default Todos;
