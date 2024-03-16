import React, { useState } from "react";

function Batching() {
  let [count, setCount] = useState(0);
  //   function handleIncrement() {
  //     // count = count + 1;
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   }

  // --------sahi approach-------

  function handleIncrement() {
    setCount((count) => count + 1);

    setCount((count) => count + 1);

    setCount((count) => count + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}> Count: {count} </button>
    </div>
  );
}

export default Batching;
