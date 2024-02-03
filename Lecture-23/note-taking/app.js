let btn = document.querySelector("button");
let inpEl = document.getElementById("inp");
let listEl = document.querySelector("#list");

btn.addEventListener("click", function (e) {
  let inpText = inpEl.value;

  let li = document.createElement("li");

  li.innerText = inpText;

  if (li.innerText !== "") {
    listEl.appendChild(li);
  }

  inpEl.value = "";

  li.addEventListener("click", function () {
    li.remove();
  });
});
