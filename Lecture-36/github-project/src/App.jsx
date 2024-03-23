import React from "react";
import Githubuser from "./Components/Githubuser";
import Wrapper, { ChildWrapper } from "./Components/Wrapper";
import Memoo from "./Components/Memoo";

function App() {
  return (
    <div>
      {/* <Githubuser username="samarth0606" />
      <Githubuser username="pro4u" />
      <Githubuser username="alok92iit" />
      <Githubuser username="harsh-kumar101" /> */}

      {/* <Wrapper comp={<ChildWrapper />} /> */}

      {/* <Wrapper>
        <h1>hello from h1 inside wrapper</h1>
        <ChildWrapper />
      </Wrapper> */}
      <Memoo />
    </div>
  );
}

export default App;
