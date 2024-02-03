let buttons = document.querySelectorAll("button");

let inpEl = document.querySelector("#inp");

for (let btn of buttons) {
  btn.addEventListener("click", function () {
    let btnText = btn.innerText;
    if (btnText === "AC") {
      inpEl.value = "";
    } else if (btnText === "=") {
      try {
        inpEl.value = eval(inpEl.value);
      } catch (e) {
        inpEl.value = "pagal hai kya";
      }
    } else {
      inpEl.value += btnText;
    }
  });
}
