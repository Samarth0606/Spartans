// let inp = document.querySelector("input");

// inp.addEventListener("input", function () {
//   console.log("hellooo");
// });

// -------------------------

let inp = document.querySelector("input");

inp.addEventListener("input", function (event) {
  //   console.log(event);
  //   console.log(event.target);
  console.log(event.target.value, "sam");
  console.log(inp.value, "mas");
});
