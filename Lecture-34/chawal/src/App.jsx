import Batching from "./Components/Batching";
import Greeting from "./Components/Greeting";
import Memoo from "./Components/Memoo";
import NaamBadaldunga from "./Components/NaamBadaldunga";
import Person from "./Components/Person";

function App() {
  return (
    <div>
      <h1>mai hu App.jsx</h1>
      {/* <Person name="sam" age={23} favColor="red" isCommitted="10" />
      <Person
        name="shivam tripathi"
        age="25"
        favColor="black"
        isCommitted="1"
      />
      <Person name="kunal kumar" age="20" favColor="green" isCommitted="0" />
      <Person
        name="deepak kalaal"
        age="16"
        favColor="orange"
        isCommitted="boy"
      /> */}
      {/* <NaamBadaldunga naam="samarth vohra" age="28" domain="webdev" /> */}
      {/* <Batching /> */}
      {/* <Greeting /> */}
      <Memoo />
    </div>
  );
}

export default App;
