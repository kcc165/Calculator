const screenArea = document.querySelector("#screen-area");
const numbers = document.querySelectorAll(".number-button");
const operations = document.querySelectorAll(".operation-button");
const equalsButton = document.querySelector("#equals");
let textnode = document.createTextNode("");
let number1 = [];
let number2 = [];
let answer = [];
let operator = "";


numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
        if (answer.length != 0){
            number1 = [];
            number2 = [];
            answer = [];
            operator = "";
            textnode.nodeValue = "";
        }
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
            if (operator === ""){
                textnode.nodeValue += ` ${e.target.firstChild.data} `;
                operator = e.target.id;
            }
            
            
        }
    });
});

equalsButton.addEventListener("click", (e) => {
    n1 = number1.join("");
    n2 = number2.join("");
    if (number1.length != 0 && number2.length != 0 && operator !== ""){
        textnode.nodeValue = equals(parseInt(n1), parseInt(n2), operator);
        answer.push(textnode.nodeValue);
    }
})




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

