function Person() {
  // STATEMENTS
  let a = 100;
  let b = "samarth vohra";
  let c = true;
  let d = false;
  let e = null;
  let g = undefined;

  //EXPRESSIONS
  return (
    <div>
      <h2>number : {a} </h2>
      <h2>string : {b} </h2>
      <h2>true : {c.toString()} </h2>
      <h2>false : {d.toString()} </h2>
      <h2>null : {JSON.stringify(e)} </h2>
      <h2>undef : {JSON.stringify(g)} </h2>
    </div>
  );
}

export default Person;
