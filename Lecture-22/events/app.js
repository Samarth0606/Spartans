// function handleClick() {
//   console.log("hello bhai");
// }

// function handleh1() {
//   console.log("hi");
// }

// --------------------

// let btn = document.querySelector("#btn");

// let f1 = function () {
//   console.log("baba bangali");
// };

// btn.onclick = f1;

// btn.onclick = function () {
//   console.log("jaadu tona");
// };

// btn.onclick = function () {
//   console.log("rona");
// };

// ----------------addEventListener-----------------

// let btn = document.querySelector("#btn");

// let f1 = function () {
//   console.log("gaanna lai re");
// };

// let f2 = function () {
//   console.log("albele tannge vale");
// };

// btn.addEventListener("click", f1);
// btn.addEventListener("click", f2);

// ----------------------------------------

let red = document.querySelector("#red");
let bodyEl = document.querySelector("body");

red.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "red";
});
