import React from "react";

// function Wrapper({ comp }) {
//   return <div>{comp}</div>;
// }

// export function ChildWrapper() {
//   return (
//     <div>
//       <h1>i am child of wrapper</h1>
//     </div>
//   );
// }

// -------

function Wrapper({ children }) {
  return <div>{children}</div>;
}

export function ChildWrapper() {
  return (
    <div>
      <h1>i am child of wrapper</h1>
    </div>
  );
}

export default Wrapper;
