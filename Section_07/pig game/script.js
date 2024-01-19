"use strict";

// get elements
const score0Ele = document.getElementById("score--0");
const score1Ele = document.getElementById("score--1");
const discEle = document.querySelector(".dice");
const discrollEle = document.querySelector(".btn--roll");
const currentScore = document.getElementById("current--0");
const currentScore01 = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const btnhold = document.querySelector(".btn--hold");
//  reset the game
const btnReset = document.querySelector(".btn--new");

let currentscore = 0;
let scores = [0, 0];
let activeplayer = 0;
let playing = true;
// starting condition

score0Ele.textContent = 0;
score1Ele.textContent = 0;
discEle.classList.add("hidden");

btnReset.addEventListener("click", () => {
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.add("player--active");
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  document.getElementById(`current--${activeplayer}`).textContent= 0
  currentscore = 0
  playing = true
});

const Player_Change = () => {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

discrollEle.addEventListener("click", () => {
  if (playing) {
    const disc_Number = Math.trunc(Math.random() * 6) + 1;

    discEle.classList.remove("hidden");
    discEle.src = `dice-${disc_Number}.png`;

    if (disc_Number !== 1) {
      currentscore += disc_Number;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      Player_Change();
    }
  }
});

btnhold.addEventListener("click", () => {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      playing = false;
      discEle.classList.add("hidden");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
    } else {
      Player_Change();
    }
  }
});
