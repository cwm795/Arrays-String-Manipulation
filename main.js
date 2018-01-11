let button = document.getElementById("button");
let output = document.getElementById("output");

button.addEventListener("click", runApp);

function runApp() {
    let input = document.getElementById("input").value;

  function reversal() {
    let reverse = input.split("").reverse().join("");
    let div = document.createElement("div");
    let reverseText = document.createTextNode(reverse);
    output.appendChild(div);
    div.appendChild(reverseText);
  }

function alphabits() {
let alphabet = input.split("").sort().join("");
let div = document.createElement("div");
let orderText = document.createTextNode(alphabet);
output.appendChild(div);
div.appendChild(orderText);
}

function palindrome() {

}





  reversal(input);
  alphabits(input)
}




