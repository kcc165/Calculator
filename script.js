const screenArea = document.querySelector("#screen-area");
const numbers = document.querySelectorAll(".number-button");
const operations = document.querySelectorAll(".operation-button");
let textnode = document.createTextNode("");
let number1 = "";
let number2 = "";
let operator = "";


numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
        textnode.nodeValue += e.target.firstChild.data
        screenArea.appendChild(textnode);
        console.log(e.target.firstChild.data);
    });
} );




function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

console.log(multiply(5,3));