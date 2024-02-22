'use strict';

console.log("hola");

const numberInput = document.querySelector(".js-numberInput");
const numberButton = document.querySelector(".js-triesButton");
const cluesBox = document.querySelector(".js-clue");
const triesBox = document.querySelector(".js-tries");



getRandomNumber(100);
console.log(getRandomNumber(100));

let tries = 0;


numberInput.addEventListener("input", () => {
});

numberButton.addEventListener("click", (event) => {

    event.preventDefault();


    triesBox.innerHTML = `número de intentos ${++tries}`;

    let numberValue = parseInt(numberInput.value);
    console.log(numberValue);

    if (numberValue < 0 || numberValue > 100) {
        cluesBox.innerHTML = `El número debe estar
        entre 1 y 100 `;
    }
    else {
        if (numberValue == getRandomNumber(100)) {
            cluesBox.innerHTML = "Has ganado campeona!!";
            console.log("igual");
        }
        if (numberValue > getRandomNumber(100)) {
            cluesBox.innerHTML = "demasiado alto ";
            console.log("alto");
        }
        if (numberValue < getRandomNumber) {
            cluesBox.innerHTML = "demasiado bajo ";
            console.log("bajo");
        }
    }


})
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}



