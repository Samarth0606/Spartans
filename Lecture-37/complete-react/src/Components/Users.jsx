import React, { memo, useCallback, useState } from "react";

function Users() {
  let [count, setCount] = useState(0);
  //   let a = 1;
  //   let a = () => {
  //     console.log("samarth teaching usecallback");
  //   };

  //   useCallback way -> right approch

  let a = useCallback(function () {
    console.log("samarth teaching usecallback");
  }, []);

  return (
    <div>
      <Demoo b={a} />
      {/* <Demoo b={count} /> */}
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}
let Demoo = memo(function ({ b }) {
  return <h1>hello from {b()}</h1>;
});

export default Users;
