// function Person(props) {
function Person({ name, age, favColor, isCommitted }) {
  //   console.log(props, "rajat");
  return (
    <div style={{ border: "2px solid red", backgroundColor: "lightcoral" }}>
      {/* <h1>Name: {props.name} </h1> */}
      <h1>Name: {name} </h1>
      {/* <h2>Age: {props.age} </h2> */}
      <h2>Age: {age} </h2>
      {/* <h2>Fav color: {props.favColor} </h2> */}
      <h2>Fav color: {favColor} </h2>
      {/* <h2>isCommitted: {props.isCommitted} </h2> */}
      <h2>isCommitted: {isCommitted} </h2>
    </div>
  );
}

export default Person;
