import React, { useMemo, useState } from "react";

function Memoo() {
  let [count, setCount] = useState(0);
  let [inp, setInp] = useState("");

  function handleInput(e) {
    setInp(e.target.value);
  }
  let memoval = useMemo(() => {
    let ans = 0;
    for (let i = 1; i <= inp; i++) {
      console.log("hello");
      ans = ans + i;
    }
    return ans;
  }, [inp]);

  function handleCounter() {
    setCount(count + 1);
  }
  return (
    <div>
      <input onChange={handleInput} type="number" value={inp} />
      <h1>Sum: {memoval}</h1>
      <button onClick={handleCounter}>Counter = {count}</button>
      {/* <button onClick={()=>setCount(count+1)}>Counter = {count}</button> */}
    </div>
  );
}

export default Memoo;
