// let h1 = document.querySelector("h1");

// console.log(h1);
// console.log(h1.innerText); //brainful
// console.log(h1.textContent); //brainless

// // h1.innerText = "hi bacchi";
// h1.textContent = "<h1> hi brainless </h1>";
// h1.innerHTML = "<h1> hi brainless </h1>";

// console.log(h1.innerText);
// ---------------------------

// let gl = document.querySelector("a");
// gl.getAttribute("href");
// gl.setAttribute("href", "http://facebook.com");
// console.log(gl.getAttribute("href"));

let id = setInterval(function () {
  console.log("hi bitcoin");
}, 2000);

setTimeout(function () {
  clearInterval(id);
}, 12000);
