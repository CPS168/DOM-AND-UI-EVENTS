// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
const descriptionElement = document.getElementById("description");
const priorityElement = document.getElementById("priority");

function addItem() {
  // 1- Create a new task
  let task = {description : "", priority : 0};

  //  2- Set the description from the text field
  if (!(descriptionElement.value.trim())){
    console.error("NO TASK DESCRIPTION");
    return -1;
  }
  task.description = descriptionElement.value;

  // 3- Set the priority from select field
  task.priority = priorityElement.value === "High" ? 1 : 0;

  // 4- Add the new object to the array
  tasks.push(task);

  console.log(tasks);
  display(tasks);
}
function display(taskList){
  taskListELement.innerHTML = "";
  taskList.forEach(task => {
    let child = document.createElement("div");
    child.className = "tasks";
    child.textContent = task.description;
    child.style.backgroundColor = task.priority === 1? "red" : "grey";
    taskListELement.appendChild(child);
  });
}
function showImportant(){
  let importantTask = tasks.filter(task => task.priority === 1);
  display(importantTask);
}
function showUnimportant(){
  let unImportantTask = tasks.filter(task => task.priority === 0);
  display(unImportantTask);
}
function showAll(){
  display(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

const taskListELement = document.createElement("div");
taskListELement.className = "tasks-list";
document.body.appendChild(taskListELement);

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

const showImportantBtn = document.getElementById("importantButton");
const showUnImportantBtn = document.getElementById("notImportantButton");
const showAllBtn = document.getElementById("showAllButton");

showImportantBtn.addEventListener("click", showImportant);
showUnImportantBtn.addEventListener("click", showUnimportant);
showAllBtn.addEventListener("click", showAll);