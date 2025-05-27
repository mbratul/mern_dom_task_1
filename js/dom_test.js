/* 
    IC URL : https://interactivecares.com/lessons/286?id=3820
 */
// console.log("hello to do list");
console.log(document);
// console.log(typeof document);
//console.dir(document.head); use console.dir for detail version of console log

const images = document.images; //it's a html collection  not an object
console.log(images);

let forms = document.forms; // it's a html collection of forms
console.log(forms);

let all_collections = document.all; //it's a collection of all html elements but it's now deprecated
console.log(all_collections);

let header = document.getElementById("header"); // find element by id.
console.log(header);
console.dir(header);
//header.textContent = "DOM Tutorial"; // display as css style written in the style sheet
//header.innerText = "DOM Tutorial to do"; // display as it is written in js
//header.style.color = "white"; // change the color
//header.style.backgroundColor = "red"; // change the background. use upper case letter for remove (-)
/* 
    in css we written background-color
    in js DOM we written backgroundColor
*/

let item = document.getElementsByClassName("item"); // find elements by class name
console.log(item);

let items = document.querySelector("#items"); // use of query selector
console.log(items);
console.dir(items);

let parent = document.querySelector("#items");
console.log(parent.children); // use of parent children relation
console.log(parent.parentElement); // to select parent element of the selected query tag

let upper_element = parent.closest(".container");
console.log(upper_element); // to select nearest tag of the variable.

let previous_element = parent.previousElementSibling; // to select immediate upper level tag
console.log(previous_element);

let next_element = document.querySelector(".todo-list"); // to select immediate next level tag
console.log(next_element.nextElementSibling);

/* const choToVaiElement = document.createElement("div");
choToVaiElement.innerHTML = "<span>Choto Vai</span>";

const container = document.querySelector(".todo-list");

container.appendChild(choToVaiElement); */

/* to select all queryselectorAll use for loop */
/* let all_item = document.querySelectorAll(".item");
for (let i = 0; i < all_item.length; i++) {
  all_item[i].style.color = "red";
} */
