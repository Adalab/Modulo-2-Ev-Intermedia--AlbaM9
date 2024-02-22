'use strict';

console.log("hola");

const numberInput = document.querySelector(".js-numberInput");
const numberButton = document.querySelector(".js-triesButton");
const cluesBox = document.querySelector(".js-clue");
const triesBox = document.querySelector(".js-tries");




let valueRandom = getRandomNumber(100);
console.log(valueRandom);

let tries = 0;

numberInput.addEventListener("input", () => {
});

numberButton.addEventListener("click", (event) => {

    event.preventDefault();
    triesBox.innerHTML = `número de intentos ${++tries}`;
    checkNumber();

})
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
function checkNumber() {



    let numberValue = parseInt(numberInput.value);
    console.log(numberValue);

    if (numberValue < 0 || numberValue > 100) {
        cluesBox.innerHTML = `El número debe estar
        entre 1 y 100 `;
    }
    else {
        if (numberValue == valueRandom) {
            cluesBox.innerHTML = "Has ganado campeona!!";
            console.log("igual");
        }
        if (numberValue > valueRandom) {
            cluesBox.innerHTML = "demasiado alto ";
            console.log("alto");
        }
        if (numberValue < valueRandom) {
            cluesBox.innerHTML = "demasiado bajo ";
            console.log("bajo");
        }
    }

}


