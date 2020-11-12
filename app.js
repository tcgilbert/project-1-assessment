//DOM Elements
let input = document.getElementById("input");
let output = document.getElementById("output");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

//variables
let total = 0;

//functions
function addInput() {
  num = parseInt(input.value);
  total = num + total;
  update();
}

function subtractInput() {
  num = parseInt(input.value);
  total = total - num;
  update();
}

function update() {
  if (total < 0) {
    output.style.color = "crimson";
  } else {
    output.style.color = "white";
  }
  output.innerText = total;
}

update();

//event listeners
plus.addEventListener("click", addInput);
minus.addEventListener("click", subtractInput);
