import React, { useEffect, useState } from "react";

function App() {
  let [time, setTime] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      // setTime(time + 1);
    }, 1000);
    //cleanup function
    return () => {
      clearInterval(id);
    };
  }, [time]);

  return <div>Timer: {time} </div>;
}

export default App;
