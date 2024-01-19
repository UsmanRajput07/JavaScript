"use strict";
/*
console.log(document.querySelector(".message").textContent)
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".number").textContent = 14;

document.querySelector(".guess").value=23
console.log(document.querySelector(".guess").value)
*/
let score = 20;
let SecuretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";
let highscore = 0;
const displayMessage=(message)=>{
  document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //  when number is not define
  if (!guess) {
    // document.querySelector(".message").textContent = "no number";
    displayMessage("no number")
  }
  //  when number is correct
  else if (guess === SecuretNumber) {
    // document.querySelector(".message").textContent = "🥳 Correct Number ";
    displayMessage("🥳 Correct Number ")
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = SecuretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== SecuretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > SecuretNumber ? "Too high" : "Too Low";
      displayMessage(guess > SecuretNumber ? "Too high" : "Too Low")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "😂 You lost the game";
      displayMessage("😂 You lost the game")
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  SecuretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "start gussing";
  displayMessage("start gussing")
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
});
