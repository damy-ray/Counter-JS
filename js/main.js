// GREATING

let newH1 = document.createElement("h1");
document.body.appendChild(newH1);
newH1.innerHTML="Damiano Raineri's Counter";

// DIV CONTAINER
let container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute("id", "container");

// ACTUAL NUMBER
let display = document.createElement("div");
container.appendChild(display);
display.innerHTML="0";
display.setAttribute("id", "number");

// INCREASE BUTTON
let increase = document.createElement("button");
container.appendChild(increase);
increase.setAttribute("id", "increase");
increase.innerHTML="+";

// DECREASE BUTTON
let decrease = document.createElement("button");
container.appendChild(decrease);
decrease.innerHTML="-";
decrease.setAttribute("id", "decrease");

// RESET BUTTON

let reset = document.createElement("button");
container.appendChild(reset);
reset.innerHTML="Start Over";
reset.setAttribute("id", "reset");




let int = document.getElementById("number");
let integer = 0;



// ADD


let add = document.getElementById("increase");
add.addEventListener("click", function(){
integer += 1;
int.innerHTML = integer;
})


//REMOVE

let remove = document.getElementById("decrease");
remove.addEventListener("click", function(){
integer -=1;
int.innerHTML = integer;
});

// RESET

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
integer = 0;
  int.innerHTML=integer;
});

//
