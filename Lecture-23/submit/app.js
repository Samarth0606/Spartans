let formEl = document.querySelector("form");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target);
  //   console.log(event.target.children[0]);
  console.log(event.target.children[1]);
  console.log(event.target.elements[1]); //more oftenly used
  console.log("form submit hogya");
});
