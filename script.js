const screenArea = document.querySelector("#screen-area");
const numbers = document.querySelectorAll(".number-button");
const operations = document.querySelectorAll(".operation-button");
let textnode = document.createTextNode("");
let number1 = [];
let number2 = [];
let operator = "";


numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
        textnode.nodeValue += e.target.firstChild.data
        screenArea.appendChild(textnode);
        if (operator === ""){
            number1.push(e.target.firstChild.data);
        }
        else {
            number2.push(e.target.firstChild.data);
        }
        console.log(number1);
        console.log(number2);
    });
} );

operations.forEach((oper) => {
    oper.addEventListener("click", (e) => {
        if (number1 !== ""){
            textnode.nodeValue += ` ${e.target.firstChild.data} `;
            operator = e.target.id;
            
            
        }
    });
});




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

function equals (num1, num2, operator){
    if (operator === "plus"){
       return add(num1, num2);
    }

    else if (operator === "subtract"){
        return subtract(num1, num2);
    }

    else if (operator === "multiply"){
        return multiply(num1, num2);
    }

    else if (operator === "divide"){
        return divide(num1, num2);
    }
}

