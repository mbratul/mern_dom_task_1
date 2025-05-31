/*  addEventListener details describe here
    url: https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/
 */

//generate incomplete todo

function generateIncompleteTodo(taskName) {
  let listItem = document.createElement("li");
  listItem.classList.add("item");

  let inputItem = document.createElement("input");
  inputItem.setAttribute("type", "checkbox");

  //add function on checkbox
  inputItem.onchange = completeTask; // call the function body

  let label = document.createElement("label");
  label.innerText = taskName;

  listItem.append(inputItem, label);

  return listItem;
}

// complete task
function completeTask(e) {
  let checkBox = e.target;
  //console.log(checkBox);

  let taskItem = checkBox.parentNode;
  //console.log(taskItem);

  let label = taskItem.querySelector("label");
  //console.log(label);

  let taskName = label.textContent;
  //console.log(taskName);

  let taskToAdd = generateCompleteTodo(taskName);
  //console.log(taskToAdd);
  document.querySelector(".complete-list ul").appendChild(taskToAdd);

  taskItem.parentNode.removeChild(taskItem); //remove task from list
}
//back To Incomplete List
function backToIncompleteList(e) {
  let buttonBack = e.target;
  //console.log(buttonBack);

  let taskItem = buttonBack.parentNode; // select the full html block
  //console.log(taskItem);

  let label = taskItem.querySelector("label");
  //console.log(label);

  let taskName = label.textContent;
  //console.log(taskName);

  let taskToAdd = generateIncompleteTodo(taskName);
  //console.log(taskToAdd);

  document.querySelector("#items").appendChild(taskToAdd);

  taskItem.parentNode.removeChild(taskItem);
}
//delete Task

function deleteTask(e) {
  let taskItem = e.target.parentNode;
  let taskContainer = taskItem.parentNode;

  taskContainer.removeChild(taskItem);
}

//generate complete todo

function generateCompleteTodo(taskName) {
  let listItem = document.createElement("li");
  listItem.classList.add("item");

  let label = document.createElement("label");
  label.innerText = taskName;

  let buttonBack = document.createElement("button");
  buttonBack.classList.add("btnback");
  buttonBack.innerText = "Back";
  buttonBack.onclick = backToIncompleteList;

  let buttonDelete = document.createElement("button");
  buttonDelete.classList.add("delete");
  buttonDelete.innerText = "Delete";
  buttonDelete.onclick = deleteTask;

  listItem.append(label, " ", buttonDelete, buttonBack);

  return listItem;
}
// create form variable
let todoForm = document.querySelector("form");

// form addEventListener
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskInput = document.querySelector("#new-task");
  let taskName = taskInput.value;
  //console.log(taskName);

  let listItemToAdd = generateIncompleteTodo(taskName); // add the list to the task
  //console.log(listItemToAdd);

  let listContainer = document.querySelector("#items");
  //console.log(listContainer);

  listContainer.appendChild(listItemToAdd); // add li to the ul

  taskInput.value = " ";
});

//let headerElement = document.getElementById("header");
// console.log(headerElement);
/* call back function */
/* headerElement.addEventListener("click", () => {
  console.log("header click");
  alert("header element double clicked");
}); */
//let inputElement = document.querySelector("#new-task");
//console.log(inputElement);

/* inputElement.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(e.target.value);
}); */

/* let formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
}); */
