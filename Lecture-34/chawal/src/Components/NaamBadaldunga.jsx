import React, { useState } from "react";

function NaamBadaldunga(props) {
  //   let naam = props.naam;
  //   function handleCLick() {
  //     console.log(naam);
  //     naam = "anonymous";
  //     console.log(naam);
  //   }
  // -------sahi neeche-----

  function handleCLick() {
    console.log(naam, umar, kaam);
    setNaam("anonymous");
    setUmar(0);
    setKaam("nalla");
    console.log(naam, umar, kaam);
  }

  //   let [naam, setNaam] = useState("" , null);
  //   let [naam, setNaam] = useState("");
  let [naam, setNaam] = useState(props.naam);
  let [umar, setUmar] = useState(props.age);
  let [kaam, setKaam] = useState(props.domain);

  return (
    <div>
      <h1>Name: {naam}</h1>
      <h2>Age: {umar}</h2>
      <h3>Domain: {kaam}</h3>
      <button onClick={handleCLick}>logout</button>
    </div>
  );
}

export default NaamBadaldunga;
