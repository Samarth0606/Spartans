import React, { Fragment, memo, useState } from "react";

function MyFrag() {
  let [dogName, setDogName] = useState("maverick");

  function changeName() {
    setDogName(Math.floor(Math.random() * 10));
  }

  return (
    <Fragment>
      <Mine person={dogName} />
      <button onClick={changeName}>Naam badlo</button>

      <Mine person="tiger" />
      <Mine person="simba" />
      <Mine person="blacky" />
    </Fragment>
  );
}

let Mine = memo(function () {
  return (
    <div>
      <h1>Mine</h1>
    </div>
  );
});

// function Mine() {
//   return (
//     <div>
//       <h1>Mine</h1>
//     </div>
//   );
// }

export default MyFrag;
