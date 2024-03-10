import React from "react";

function Events() {
  function handleClick1() {
    console.log("hello from 1");
  }
  function handleClick2() {
    console.log("hello from 2");
  }
  function handleClick3(a, b) {
    console.log(`hi ${a} , ${b}`);
  }

  return (
    <div>
      {/* <button onClick={handleClick1}>Click me-1</button>
      <button onClick={handleClick2}>Click me-2</button> */}
      {/* <button onClick={handleClick3(5, 6)}>arguments leja</button> */}
      <button
        onClick={() => {
          return handleClick3(5, 6);
        }}
      >
        arguments leja
      </button>
      <button onClick={() => handleClick3("sam", "vohra")}>
        arguments leja
      </button>
    </div>
  );
}

export default Events;
