"use strict";

// console.log(document.querySelector('.message').textContent);;
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// const displayMessageVol2 = msg =>  document.querySelector('.message').textContent = msg
document.querySelector(".check").addEventListener("click", function () {
  // console.log('click happened');
  //    console.log(document.querySelector('.guess').value, typeof document.querySelector('.guess').value);
  const guess = Number(document.querySelector(".guess").value);
  //    console.log(guess,typeof guess);
  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    document.querySelector(".check").disabled = true;
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " 📈Too high!" : "📉 Too Low!");
      score--;
      console.log("score>0", score);
      document.querySelector(".score").textContent = score;
    } else {
      console.log("score===0", score);
      displayMessage("💥 You lost the game");
      document.querySelector(".score").textContent = score;
    }
  }

  // else if (guess < secretNumber) {
  //   console.log(guess < secretNumber);

  //   if (score > 1) {
  //     displayMessage("📉 Too Low!");
  //     score--;
  //     console.log("score>0", score);
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     console.log("score===0", score);
  //     displayMessage("💥 You lost the game");
  //     document.querySelector(".score").textContent = score;
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage(" 📈Too high!");
  //     score--;
  //     console.log("score>0", score);
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     console.log("score===0", score);
  //     displayMessage("💥 You lost the game");
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
