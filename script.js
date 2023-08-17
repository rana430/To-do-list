const checkbox = document.getElementById("myCheckbox");
const listBody = document.getElementById("list-container");
const paragraph = document.querySelector("p");
const addBtn = document.getElementById("add");
const addTasks = document.getElementById("add-task");
const deleteButtons = document.querySelectorAll(".delete-task");
const taskCheckboxes = document.querySelectorAll(".task input[type='checkbox']");

addTasks.addEventListener("input", () => {
  addBtn.disabled = addTasks.value.trim() === "";
});



taskCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const listItem = this.closest(".task");
    const paragraph = listItem.querySelector("p");
    
    if (this.checked) {
      paragraph.classList.add("checked");
    } else {
      paragraph.classList.remove("checked");
    }
  });
});

deleteButtons.forEach((span) => {
  span.addEventListener("click", () => {
    const listItem = span.closest(".task");
    listItem.remove();
  });
});

function addTask() {
  const listItem = document.createElement("li");
  listItem.className = "task"; 

  const taskDiv = document.createElement("div");

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.id = "myCheckbox";

  const taskLabel = document.createElement("label");
  taskLabel.htmlFor = "myCheckbox";

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
  addTasks.value = "";
  addBtn.disabled = 1;
}
