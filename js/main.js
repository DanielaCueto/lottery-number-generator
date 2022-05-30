"use strict";

const number = document.querySelector(".numbergenerated");
const button = document.querySelector(".button-js");

console.log(number, button);

//Función que retorna un número aleatorio.
function randomNumber(number) {
  const randomNumber = Math.trunc(Math.random() * number) + 1;
  return randomNumber;
}
//Función que retorna un array de 5 números aleatorios
const keyGenerator = () => {
  let key = [];
  for (let i = 1; i <= 5; i++) {
    /*    let number = randomNumber();
    while(key.includes(number)) {
      number = randomNumber();
    } */
    let number;
    do {
      number = randomNumber(48);
    } while (key.includes(number));

    key.push(number);
  }

  return key;
};

//Función que retorna un array de dos número aleatorios.
const starsGenerator = () => {
  let stars = [];
  for (let i = 1; i <= 2; i++) {
    let number;
    do {
      number = randomNumber(8);
    } while (stars.includes(number));
    stars.push(number);
  }
  let starwithHtml = `<span class="stars"> ${stars.join(" - ")}</span>`;
  return starwithHtml;
};

console.log(keyGenerator());
console.log(starsGenerator());

function generateNumber() {
  const completed = keyGenerator().concat(starsGenerator());
  console.log(completed);
  return completed.join(" - ");
}
console.log(generateNumber());

function displayNumber(key) {
  return (number.innerHTML = `  ${key}`);
}

button.addEventListener("click", function () {
  displayNumber(generateNumber());
  /* let keyNumbers = keyGenerator();
  let starNumbers = starsGenerator();
  let numberCompleted = keyNumbers.concat(starNumbers).join("" + " " + " - ");
  console.log(numberCompleted);
  return (number.innerHTML = `${numberCompleted}`); */
});
