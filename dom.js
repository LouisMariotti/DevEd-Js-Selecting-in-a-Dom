// One method to select an element of our html is to select the element tag

/* const headers = document.getElementsByTagName("h2"); // we have to create a variable in order to be able to display in the console

console.log(headers); // we got our element in node type

const list = document.getElementsByClassName("item"); // To select element in a class

console.log(list);

const button = document.getElementById("submit");

console.log(button); */

// These will return the first element they have for a name, take care to not give same id/class... name to different element

// QuerySelector <- use most of the time cuz also useful with css

const headers = document.querySelectorAll("h2");
console.log(headers[1]); // [1] to get only a specific element

const list = document.querySelector(".item"); // same way as selecting classes with css
console.log(list);

const button = document.querySelector("#submit"); // same way as selecting id in css
console.log(button);
