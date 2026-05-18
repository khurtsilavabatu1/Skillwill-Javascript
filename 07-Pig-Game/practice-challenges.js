"use strict";

////////////////////////////////////
// Pig Game - Advanced DOM Manipulation
// Practice Challenges - With Solutions
////////////////////////////////////

////////////////////////////////////
// Practice Challenge #1 - Rock Paper Scissors Game
// (Two Players, DOM Updates, Score Tracking, Reset)

/*
Build a Rock Paper Scissors game for two players that runs in the console,
using game state management patterns from the Pig Game.

1. Declare game state variables with 'let' (no initial values):
   scores (array for 2 players), activePlayer, playing, roundCount

2. Create an init function that:
   - Sets scores to [0, 0]
   - Sets activePlayer to 0
   - Sets playing to true
   - Sets roundCount to 0
   - Logs "Game reset! Rock Paper Scissors - First to 3 wins!"
   Call init() immediately.

3. Create a function 'getChoice' that takes a player number (0 or 1) and
   returns a random choice: 'rock', 'paper', or 'scissors'
   HINT: Use Math.random() and if/else or an array with index

4. Create a function 'determineWinner' that takes two choices and returns:
   - 0 if player 1 wins
   - 1 if player 2 wins
   - -1 if it's a tie

5. Create a function 'playRound' that:
   - Checks the 'playing' flag first (return early if false)
   - Gets choices for both players using getChoice
   - Determines the winner
   - Updates the scores array
   - Increments roundCount
   - Logs the round result: "Round 1: rock vs scissors - Player 1 wins!"
   - Checks if either player has reached 3 wins
   - If yes: set playing to false and log the final winner
   - Uses template literals with activePlayer for dynamic messages

6. Simulate a full game by calling playRound() in a while loop
   (while playing is true, max 20 rounds to prevent infinite loops)

TEST DATA: Random - results will vary each run
EXPECTED: Game plays rounds until someone reaches 3 wins

HINT: For random choice, create an array ['rock', 'paper', 'scissors']
      and use Math.trunc(Math.random() * 3) as the index
HINT: Use the playing flag pattern from Pig Game

GOOD LUCK :)
*/

// let scores, activePlayer, playing, roundCount;

// const init = function () {
//   scores = [0, 0];
//   activePlayer = 0;
//   playing = true;
//   roundCount = 0;
//   console.log('Game reset! Rock Paper Scissors - First to 3 wins!');
// };
// init();

// const getChoice = function (player) {
//   const choices = ['rock', 'paper', 'scissors'];
//   const randomIndex = Math.trunc(Math.random() * 3);
//   return choices[randomIndex];
// };

// const determineWinner = function (choice1, choice2) {
//   if (choice1 === choice2) return -1;
//   if (
//     (choice1 === 'rock' && choice2 === 'scissors') ||
//     (choice1 === 'paper' && choice2 === 'rock') ||
//     (choice1 === 'scissors' && choice2 === 'paper')
//   ) {
//     return 0;
//   } else {
//     return 1;
//   }
// };

// const playRound = function () {
//   if (!playing) return;

//   const choice0 = getChoice(0);
//   const choice1 = getChoice(1);
//   const winner = determineWinner(choice0, choice1);

//   roundCount++;

//   if (winner === -1) {
//     console.log(`Round ${roundCount}: ${choice0} vs ${choice1} - Tie!`);
//   } else {
//     scores[winner]++;
//     console.log(
//       `Round ${roundCount}: ${choice0} vs ${choice1} - Player ${
//         winner + 1
//       } wins! (Score: ${scores[0]}-${scores[1]})`
//     );
//   }

//   if (scores[0] >= 3) {
//     playing = false;
//     console.log(
//       `Game Over! Player 1 wins the match ${scores[0]}-${scores[1]}!`
//     );
//   } else if (scores[1] >= 3) {
//     playing = false;
//     console.log(
//       `Game Over! Player 2 wins the match ${scores[0]}-${scores[1]}!`
//     );
//   }
// };

// // Simulate a full game
// let safetyCounter = 0;
// while (playing && safetyCounter < 20) {
//   playRound();
//   safetyCounter++;
// }
