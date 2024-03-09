// let rootEl = document.getElementById("root");
// let h1 = document.createElement("h1");

// h1.innerText = "hi i am dom ka h1";

// rootEl.append(h1);

// ----------------------------

// console.log(React);
// console.log(ReactDOM);

// let rootEl = document.getElementById("root");
// // let h1 = React.createElement("h1", null, "hello from react cdn");
// let h1 = React.createElement(
//   "h1",
//   { id: "sam", className: "vohra" },
//   "hello from react cdn"
// );

// ReactDOM.render(h1, rootEl);

// ------------------------

// let rootEl = document.getElementById("root");
// // let h1 = React.createElement("h1", null, "hello from react cdn");
// let h1 = React.createElement(
//   "h1",
//   { id: "sam", className: "vohra" },
//   "hello from react cdn"
// );

// let h2 = React.createElement("h2", null, "hello from h2 react cdn");

// // ReactDOM.createRoot(document.getElementById("root"))
// let root = ReactDOM.createRoot(rootEl);
// root.render([h1, h2]);

// -----------------------

// let rootEl = document.getElementById("root");
// // let h1 = React.createElement("h1", null, "hello from react cdn");

// let div = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "hello from h1 inside div")
// );

// // ReactDOM.createRoot(document.getElementById("root"))
// let root = ReactDOM.createRoot(rootEl);
// root.render(div);

// ---------------------------------

let rootEl = document.getElementById("root");
// let div = <div> hi i am div {1 + 2} </div>;
let div = (
  <div>
    <div>
      <h1>hello h1</h1>
      <h2>hello h2</h2>
    </div>
  </div>
);

let root = ReactDOM.createRoot(rootEl);
root.render(div);
