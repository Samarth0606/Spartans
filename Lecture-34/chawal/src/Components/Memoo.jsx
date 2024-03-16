import React, { memo, useState } from "react";

function Memoo() {
  let [title, setTitle] = useState("web developer");

  function handleClick() {
    setTitle(Math.floor(Math.random() * 10));
  }
  return (
    <div>
      <ChotaMemo title={title} />
      <button onClick={handleClick}>Click me</button>
      <ChotaMemo title="app developer" />
      <ChotaMemo title="ml developer" />
    </div>
  );
}

// function ChotaMemo({ title }) {
//   return <div>Title: {title}</div>;
// }
// ---------
let ChotaMemo = memo(function ({ title }) {
  return <div>Title: {title}</div>;
});

export default Memoo;
