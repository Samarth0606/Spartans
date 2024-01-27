let arr = [
  "https://images.unsplash.com/photo-1506620195489-7839a134b1f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1705951439619-28c0fbbd0ab0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686578601-e7851641d52c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1705959708017-fa4400b1c8a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
];

let n = 0;
let imgEl = document.querySelector("img");

let id = setInterval(function () {
  imgEl.setAttribute("src", arr[n]);
  n = (n + 1) % arr.length;
}, 2000);

setTimeout(function () {
  clearInterval(id);
}, 30 * 1000);
