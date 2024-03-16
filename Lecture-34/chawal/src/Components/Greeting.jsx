import React, { useState } from "react";

function Greeting() {
  return (
    <div>
      <Bada naam="sam" />
      <Chotu naam="shyam" />
    </div>
  );
}
function Bada({ naam }) {
  let [name, setName] = useState(naam);
  function handleName() {
    setName(Math.floor(Math.random() * 10));
  }
  return (
    <div>
      <Chotu naam={name} />
      <button onClick={handleName}>Click</button>
    </div>
  );
}

function Chotu({ naam }) {
  return <div>Name : {naam}</div>;
}

export default Greeting;
