import React, { useEffect, useRef, useState } from "react";

function Reff() {
  let [salary, setSalary] = useState(40000);
  let spanEl = useRef();

  //   console.log(spanEl, "sam");
  useEffect(function () {
    setTimeout(() => {
      spanEl.current.innerHTML = "20";
    }, 5000);
  }, []);

  return (
    <div>
      My Salary: <span ref={spanEl}>{salary}</span>
    </div>
  );
}

export default Reff;
