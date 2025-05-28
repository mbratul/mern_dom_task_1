/*  addEventListener details describe here
    url: https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/
 */

//generate incomplete todo

function generateIncompleteTodo(taskname) {
  let listItem = document.createElement("li");
  listItem.classList.add("item");

  let inputItem = document.createElement("input");
  inputItem.setAttribute("type", "checkbox");

  let label = document.createElement("label");
  label.innerText = taskname;

  return listItem.append(inputItem, label);
}

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
