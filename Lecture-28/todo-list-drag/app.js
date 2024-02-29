let todoList = document.getElementById("todoList");
let addTaskBtn = document.getElementById("addTaskBtn");
let newTaskInp = document.getElementById("newTask");

function createElement(taskText) {
  let taskElement = document.createElement("div");
  taskElement.innerHTML = `
    <span> ${taskText} </span>
    <button class="editTask">Edit</button>
    <button class="deleteTask">Delete</button>
    `;

  let deleteBtn = taskElement.querySelector(".deleteTask");
  deleteBtn.addEventListener("click", function () {
    taskElement.remove();
  });

  let editBtn = taskElement.querySelector(".editTask");
  editBtn.addEventListener("click", function () {
    let newTaskText = prompt("edit the text", taskText);
    if (newTaskText !== "") {
      taskElement.querySelector("span").innerText = newTaskText;
    }
    taskText = newTaskText;
  });

  //   ------------------------

  return taskElement;
}

addTaskBtn.addEventListener("click", function () {
  //   let taskText = newTaskInp.value;
  let taskText = newTaskInp.value.trim();
  if (taskText !== "") {
    // console.log(taskText);
    let taskElement = createElement(taskText);
    todoList.appendChild(taskElement);
    newTaskInp.value = "";
  }
});
