import React from "react";

function Conditions() {
  let rn = Math.floor(Math.random() * 10);
  //   let el;
  //   if (rn === 7) {
  //     el = <h1>lucky 7</h1>;
  //   } else {
  //     el = <h1>better luck next time</h1>;
  //   }

  return (
    <div>
      Conditions
      {/* <h1>
        {rn}: {el}
      </h1> */}
      {rn}
      {rn === 7 ? <h1>lucky 7</h1> : <h1>better luck next time</h1>}
    </div>
  );
}

export default Conditions;
