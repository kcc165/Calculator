const textArea = document.querySelector("#text-area");
const numbers = document.querySelectorAll(".number-button");
console.log(numbers);

numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
        console.log(e);
    });
} );