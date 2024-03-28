import React, { useRef, useState } from "react";

function Refff() {
  //   let [count, setCount] = useState(0);

  //   function handleIncrement() {
  //     setCount(count + 1);
  //     console.log(count);
  //   }

  // -------
  let countRef = useRef(0);
  console.log(countRef, "sama");
  function handleIncrement() {
    countRef.current++;
    console.log(countRef);
  }

  return (
    <div>
      {/* <h1>Count - {count}</h1> */}
      <h1>Count - {countRef.current}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Refff;
