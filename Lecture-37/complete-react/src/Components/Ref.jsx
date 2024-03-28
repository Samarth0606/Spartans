import React, { useEffect } from "react";

function Ref() {
  let salary = 40000; //ctc -> 20

  useEffect(function () {
    setTimeout(() => {
      document.getElementById("salary").innerHTML = "20";
    }, 3000);
  }, []);

  return (
    <div>
      My Salary: <span id="salary">{salary}</span>
    </div>
  );
}

export default Ref;
