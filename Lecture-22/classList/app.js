// let h2 = document.querySelector("h2");

// h2.setAttribute("class", "bye hi");

// ---------------------------------

// classList

let h2 = document.querySelector("h2");

// h2.classList.add("sam");
// h2.classList.add("tom");

h2.classList.add("sam", "tom", "bye");
h2.classList.remove("hi", "sam", "kunal");

h2.classList.toggle("sam");
h2.classList.contains("kunal");
