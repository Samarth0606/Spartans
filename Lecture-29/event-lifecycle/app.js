let grandParent = document.getElementById("grandparent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

// grandParent.addEventListener(
//   "click",
//   function () {
//     console.log("mai hu daada");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   function () {
//     console.log("mai hu papa");
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   function () {
//     console.log("mai hu beta");
//   },
//   true
// );

// ----------
// grandParent.addEventListener(
//   "click",
//   function () {
//     console.log("mai hu daada");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   function (event) {
//     event.stopPropagation(); //to stop flow
//     console.log("mai hu papa");
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   function () {
//     console.log("mai hu beta");
//   },
//   true
// );

// ----------
// ----------
grandParent.addEventListener(
  "click",
  function () {
    console.log("mai hu daada");
  },
  false
);

parent.addEventListener(
  "click",
  function () {
    console.log("mai hu papa");
  },
  false
);

child.addEventListener(
  "click",
  function (event) {
    event.stopPropagation(); //to stop flow
    console.log("mai hu beta");
  },
  false
);
