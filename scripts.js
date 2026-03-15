// container
let container = document.createElement("div");
container.className =
  "container mx-auto grid place-items-center h-full gap-4 py-25";

// heading
let heading = document.createElement("h1");
heading.className = "text-3xl font-bold";
heading.textContent = "Todo App";

// input section
let inputBox = document.createElement("div");
inputBox.className = "flex gap-2";

// input
let input = document.createElement("input");
input.type = "text";
input.placeholder = "your do's";
input.className = "border-2 border-gray-300 p-2 rounded-lg w-72";
input.id = "inputSec";

//

// button
let button = document.createElement("button");
button.className =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gap-2";
button.textContent = "+ Add";

// append input + button
inputBox.appendChild(input);
inputBox.appendChild(button);

// function to create todo card

let card = document.createElement("div");
let label = document.createElement("label");
let radio = document.createElement("input");
// append everything

container.appendChild(heading);
container.appendChild(inputBox);

// sample cards

document.body.appendChild(container);

// CODE YAHAN SE START HOGA

let todo = JSON.parse(localStorage.getItem("todo") || "[]");
todo.forEach(function (contents) {
  let card = document.createElement("div");
  let label = document.createElement("label");
  let radio = document.createElement("input");
  let deletee = document.createElement("span");

  card.className =
    "cards bg-gray-200 rounded-lg p-2 w-80 flex items-center gap-2";

  radio.type = "radio";
  radio.name = "inputList";

  label.textContent = contents;

  deletee.textContent = "X";
  deletee.className = "text-red-500 cursor-pointer px-20";

  card.appendChild(radio);
  card.appendChild(label);
  card.appendChild(deletee);

  container.appendChild(card);

  

  input.value = "";


   deletee.addEventListener("click", function () {
    container.removeChild(card);

    todo = todo.filter(function(items){
      return items !==contents;

    });
    localStorage.setItem("todo", JSON.stringify(todo));
  });

  radio.addEventListener("click", function () {
    if (radio.checked) {
      label.style.textDecoration = "line-through";
      label.style.opacity = "0.4";
    } else {
      label.style.textDecoration = "none";
    }
  });
});



button.addEventListener("click", function () {

    let card = document.createElement("div");
let label = document.createElement("label");
let radio = document.createElement("input");
let deletee = document.createElement("span");

card.className = "cards bg-gray-200 rounded-lg p-2 w-80 flex items-center gap-2";

radio.type = "radio";
radio.name = "inputList";

let todoText = input.value;
  

  if (input.value.trim() === "") {
    alert("please enter a valid todo");
    return;
  }
  label.textContent = todoText;

  deletee.textContent = "X";
deletee.className = "text-red-500 cursor-pointer px-20";

card.appendChild(radio);
card.appendChild(label);
card.appendChild(deletee);

container.appendChild(card);

  todo.push(todoText);
  localStorage.setItem("todo", JSON.stringify(todo));
  alert("todo added successfully");


 
  

  
});
