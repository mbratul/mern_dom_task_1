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

let items = document.getElementsByClassName("item"); // find elements by class name
console.log(items);
