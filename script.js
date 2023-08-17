const listBody = document.getElementById("list-container");
const addBtn = document.getElementById("add");
const addTasks = document.getElementById("add-task");
var counter = 0;

addTasks.addEventListener("input", () => {
  addBtn.disabled = addTasks.value.trim() === "";
});

function addTask() {
  const listItem = document.createElement("li");
  listItem.className = "task";

  const taskDiv = document.createElement("div");

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.id = "myCheckbox" + counter;
  taskCheckbox.className = "checker";

  const taskLabel = document.createElement("label");
  taskLabel.htmlFor = "myCheckbox" + counter;
  
  counter++;

  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = addTasks.value;

  taskDiv.appendChild(taskCheckbox);
  taskDiv.appendChild(taskLabel);
  taskDiv.appendChild(taskParagraph);

  const deleteButton = document.createElement("span");
  deleteButton.className = "delete-task";
  deleteButton.innerHTML = '<i class="fa-solid fa-x fa-sm"></i>';

  listItem.appendChild(taskDiv);
  listItem.appendChild(deleteButton);
  listBody.appendChild(listItem);

  const taskCheckboxes = document.querySelectorAll(".checker");
  const texts = document.querySelectorAll(".task p");
  const deleteButtons = document.querySelectorAll("span");

  for (let i = 0; i < taskCheckboxes.length; i++) {
    const checker = taskCheckboxes[i];
    checker.addEventListener("change", () => {
      if (checker.checked) {
        texts[i].classList.add("checked");
      } else {
        texts[i].classList.remove("checked");
      }
    });
  }

  for (let i = 0; i < deleteButtons.length; i++) {
    const deletebtn = deleteButtons[i];
    deletebtn.addEventListener("click", () => {
      const li= deletebtn.closest(".task");
      li.remove();
    });
  }

  addTasks.value = "";
  addBtn.disabled = 1;
}
