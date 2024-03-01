// let products = document.querySelectorAll("section figure");

// for (let item of products) {
//   item.addEventListener("click", function () {
//     console.log(this.innerText);
//   });
// }

// ----------------------------

// event delegation -> child event -> papa par laga do

let section = document.querySelector("section");
section.addEventListener("click", function (event) {
  // console.log(event, "sam");
  if (event.target.nodeName === "FIGURE") {
    console.log(event.target.innerText);
  }
});

// ---------------------
// advnce topics-----

// throttling
// debouncing
// polyfills
// event delegation ✅
// event lifecycle ✅
