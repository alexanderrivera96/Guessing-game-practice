"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  // retreiving the number from the guess input field.
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (Number(guess) === secretNumber) {
    // When the player guesses the right number.
    document.querySelector(".body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30 rem";
  }
});
