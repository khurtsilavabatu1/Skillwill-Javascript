'use strict';

////////////////////////////////////
// DOM and Guess My Number Game
// Practice Challenges - With Solutions
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Color Guessing Game
// (DOM Manipulation + Random Colors)

/*
Build a simple color guessing game where the player must click
the button that matches a randomly generated RGB color code.

1. Create an HTML file with:
   - A <p> element with class 'color-display' to show the target RGB color string
   - Three <button> elements with class 'color-btn' (these will be color swatches)
   - A <p> element with class 'result-message' for showing "Correct!" or "Try again!"
   - A <button> with class 'new-game' to generate new colors
2. In JavaScript, create a function 'generateRandomColor' that returns
   a random RGB string like "rgb(123, 45, 200)"
   - Use Math.trunc(Math.random() * 256) for each channel (0-255)
3. Create a function 'startNewRound' that:
   - Generates 3 random colors and assigns them to the 3 buttons
     (using element.style.backgroundColor)
   - Randomly picks one of the 3 as the "correct" answer
   - Displays the correct color's RGB string in the color-display element
   - Clears the result message
4. Add click event listeners to each color button that:
   - Compare the clicked button's backgroundColor to the target color
   - Display "Correct!" or "Try again!" in the result-message element
   - If correct, change the body background to the winning color
5. Add a click event listener on the 'new-game' button to call startNewRound

TEST DATA: The colors are random, so just verify that:
- 3 different colors appear on the buttons
- Clicking the right one shows "Correct!"
- Clicking the wrong one shows "Try again!"

HINT: Math.trunc(Math.random() * 256) generates 0-255
HINT: Store the correct color in a variable outside the handler
HINT: Compare using the RGB string format

GOOD LUCK 😀
*/

// const generateRandomColor = function () {
//   const r = Math.trunc(Math.random() * 256);
//   const g = Math.trunc(Math.random() * 256);
//   const b = Math.trunc(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// };
//
// let correctColor = '';
//
// const startNewRound = function () {
//   const color1 = generateRandomColor();
//   const color2 = generateRandomColor();
//   const color3 = generateRandomColor();
//
//   const colors = [color1, color2, color3];
//   const correctIndex = Math.trunc(Math.random() * 3);
//   correctColor = colors[correctIndex];
//
//   document.querySelector('.color-display').textContent = correctColor;
//   document.querySelector('.result-message').textContent = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//
//   const buttons = document.querySelectorAll('.color-btn');
//   buttons[0].style.backgroundColor = color1;
//   buttons[1].style.backgroundColor = color2;
//   buttons[2].style.backgroundColor = color3;
// };
//
// // Add click listener to each color button
// const buttons = document.querySelectorAll('.color-btn');
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function () {
//     const clickedColor = this.style.backgroundColor;
//     if (clickedColor === correctColor) {
//       document.querySelector('.result-message').textContent = 'Correct!';
//       document.querySelector('body').style.backgroundColor = correctColor;
//     } else {
//       document.querySelector('.result-message').textContent = 'Try again!';
//     }
//   });
// }
//
// document.querySelector('.new-game').addEventListener('click', startNewRound);
//
// // Start first round
// startNewRound();


////////////////////////////////////
// Practice Challenge #2 - Counter App
// (Increment / Decrement / Reset with DOM Updates)

/*
Build a counter application with increment, decrement, and reset functionality.

1. Create an HTML file with:
   - A <p> element with class 'counter-value' showing "0"
   - Three buttons: class 'btn-increment' (+), class 'btn-decrement' (-),
     class 'btn-reset' (Reset)
   - A <p> element with class 'counter-status' for status messages
2. Create a variable 'count' initialized to 0
3. Create a function 'updateDisplay' that:
   - Sets the textContent of '.counter-value' to the current count
   - Changes the color of '.counter-value' based on the value:
     - Positive: green (#2ecc71)
     - Negative: red (#e74c3c)
     - Zero: white (#ecf0f1)
   - Updates the status message:
     - count > 10: "High value!"
     - count < -10: "Very low!"
     - count === 0: "Reset to zero"
     - Otherwise: ""
4. Add click event listeners:
   - Increment button: count++ then updateDisplay()
   - Decrement button: count-- then updateDisplay()
   - Reset button: count = 0 then updateDisplay()

TEST DATA: Click increment 5 times -> shows "5" in green
           Click decrement 10 times -> shows "-5" in red
           Click reset -> shows "0" in white

HINT: Use element.style.color to change text color
HINT: Keep count as a state variable outside the handlers

GOOD LUCK 😀
*/

// let count = 0;
//
// const updateDisplay = function () {
//   document.querySelector('.counter-value').textContent = count;
//
//   if (count > 0) {
//     document.querySelector('.counter-value').style.color = '#2ecc71';
//   } else if (count < 0) {
//     document.querySelector('.counter-value').style.color = '#e74c3c';
//   } else {
//     document.querySelector('.counter-value').style.color = '#ecf0f1';
//   }
//
//   if (count > 10) {
//     document.querySelector('.counter-status').textContent = 'High value!';
//   } else if (count < -10) {
//     document.querySelector('.counter-status').textContent = 'Very low!';
//   } else if (count === 0) {
//     document.querySelector('.counter-status').textContent = 'Reset to zero';
//   } else {
//     document.querySelector('.counter-status').textContent = '';
//   }
// };
//
// document.querySelector('.btn-increment').addEventListener('click', function () {
//   count++;
//   updateDisplay();
// });
//
// document.querySelector('.btn-decrement').addEventListener('click', function () {
//   count--;
//   updateDisplay();
// });
//
// document.querySelector('.btn-reset').addEventListener('click', function () {
//   count = 0;
//   updateDisplay();
// });
//
// updateDisplay();


////////////////////////////////////
// Practice Challenge #3 - Quiz Card
// (Show/Hide Answer with Style Manipulation)

/*
Build a flashcard quiz where clicking a button reveals or hides the answer.

1. Create an HTML file with:
   - A <div> with class 'card' containing:
     - A <p> with class 'question-text' showing a question
     - A <p> with class 'answer-text' that is initially hidden
       (use style="display: none;" in the HTML)
   - A <button> with class 'toggle-btn' showing "Show Answer"
   - A <p> with class 'card-counter' showing "Card 1 / 3"
   - A <button> with class 'next-card' showing "Next Card"
2. Create an array 'cards' containing 3 objects, each with 'question'
   and 'answer' properties:
   - { question: "What does DOM stand for?", answer: "Document Object Model" }
   - { question: "Which method selects an HTML element?", answer: "document.querySelector()" }
   - { question: "How do you attach a click handler?", answer: "element.addEventListener('click', fn)" }
3. Create a variable 'currentCard' starting at 0
4. Create a variable 'isAnswerVisible' starting at false
5. Create a function 'displayCard' that:
   - Updates the question text from the cards array
   - Hides the answer (set display to 'none')
   - Resets the button text to "Show Answer"
   - Sets isAnswerVisible to false
   - Updates the card counter text
6. Add a click listener on the toggle button:
   - If answer is hidden, show it (display = 'block') and change button to "Hide Answer"
   - If answer is visible, hide it (display = 'none') and change button to "Show Answer"
   - Toggle the isAnswerVisible variable
7. Add a click listener on the next-card button:
   - Increment currentCard (loop back to 0 after the last card)
   - Call displayCard()

TEST DATA: Use the 3 card objects described above

HINT: Use element.style.display = 'none' to hide and 'block' to show
HINT: Use the modulo operator (%) to loop: currentCard = (currentCard + 1) % cards.length

GOOD LUCK 😀
*/

// const cards = [
//   { question: 'What does DOM stand for?', answer: 'Document Object Model' },
//   {
//     question: 'Which method selects an HTML element?',
//     answer: 'document.querySelector()',
//   },
//   {
//     question: 'How do you attach a click handler?',
//     answer: "element.addEventListener('click', fn)",
//   },
// ];
//
// let currentCard = 0;
// let isAnswerVisible = false;
//
// const displayCard = function () {
//   document.querySelector('.question-text').textContent =
//     cards[currentCard].question;
//   document.querySelector('.answer-text').textContent =
//     cards[currentCard].answer;
//   document.querySelector('.answer-text').style.display = 'none';
//   document.querySelector('.toggle-btn').textContent = 'Show Answer';
//   isAnswerVisible = false;
//   document.querySelector('.card-counter').textContent = `Card ${
//     currentCard + 1
//   } / ${cards.length}`;
// };
//
// document.querySelector('.toggle-btn').addEventListener('click', function () {
//   if (isAnswerVisible) {
//     document.querySelector('.answer-text').style.display = 'none';
//     document.querySelector('.toggle-btn').textContent = 'Show Answer';
//   } else {
//     document.querySelector('.answer-text').style.display = 'block';
//     document.querySelector('.toggle-btn').textContent = 'Hide Answer';
//   }
//   isAnswerVisible = !isAnswerVisible;
// });
//
// document.querySelector('.next-card').addEventListener('click', function () {
//   currentCard = (currentCard + 1) % cards.length;
//   displayCard();
// });
//
// displayCard();


////////////////////////////////////
// Practice Challenge #4 - Dice Roller
// (Random Number + Display + Score Tracking)

/*
Build a dice roller game where two players take turns rolling a dice.
The first player to reach a target score wins!

1. Create an HTML file with:
   - A <div> with class 'dice-display' showing "🎲"
   - A <p> with class 'roll-result' for showing the roll result
   - A <button> with class 'roll-btn' showing "Roll Dice"
   - Two score displays:
     - <p> with class 'p1-score' showing "Player 1: 0"
     - <p> with class 'p2-score' showing "Player 2: 0"
   - A <p> with class 'current-player' showing "Current: Player 1"
   - A <p> with class 'winner-message' for the winner announcement
   - A <button> with class 'reset-btn' showing "New Game"
2. Create state variables:
   - p1Score = 0, p2Score = 0
   - currentPlayer = 1
   - targetScore = 20
   - gameOver = false
3. Create a function 'rollDice' that returns a random number 1-6
4. Create a function 'updateScores' that updates both score displays
5. Add a click listener on the roll button:
   - If game is over, do nothing (return early)
   - Roll the dice and display the result in roll-result
   - Display the dice emoji in dice-display based on the roll:
     (1='⚀', 2='⚁', 3='⚂', 4='⚃', 5='⚄', 6='⚅')
   - Add the roll to the current player's score
   - Update the score display
   - Check if the current player reached the target score:
     - If yes: display winner message and set gameOver = true
     - If no: switch to the other player and update current-player display
6. Add a click listener on the reset button:
   - Reset all state variables
   - Clear all displays
   - Set gameOver to false

TEST DATA: Results are random, but verify:
- Rolling adds to current player's score
- Players alternate turns
- First to 20 wins
- Reset clears everything

HINT: Use an array for dice emojis: ['⚀','⚁','⚂','⚃','⚄','⚅'][roll - 1]
HINT: Switch player: currentPlayer = currentPlayer === 1 ? 2 : 1

GOOD LUCK 😀
*/

let p1Score = 0;
let p2Score = 0;
let currentPlayer = 1;
const targetScore = 20;
let gameOver = false;

const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

const rollDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const updateScores = function () {
  document.querySelector('.p1-score').textContent = `Player 1: ${p1Score}`;
  document.querySelector('.p2-score').textContent = `Player 2: ${p2Score}`;
};

document.querySelector('.roll-btn').addEventListener('click', function () {
  if (gameOver) return;

  const roll = rollDice();
  document.querySelector('.dice-display').textContent = diceEmojis[roll - 1];
  document.querySelector('.roll-result').textContent = `Rolled: ${roll}`;

  if (currentPlayer === 1) {
    p1Score += roll;
  } else {
    p2Score += roll;
  }

  updateScores();

  if (
    (currentPlayer === 1 && p1Score >= targetScore) ||
    (currentPlayer === 2 && p2Score >= targetScore)
  ) {
    document.querySelector(
      '.winner-message'
    ).textContent = `Player ${currentPlayer} wins!`;
    document.querySelector('body').style.backgroundColor = '#2ecc71';
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.querySelector(
      '.current-player'
    ).textContent = `Current: Player ${currentPlayer}`;
  }
});

document.querySelector('.reset-btn').addEventListener('click', function () {
  p1Score = 0;
  p2Score = 0;
  currentPlayer = 1;
  gameOver = false;

  updateScores();
  document.querySelector('.dice-display').textContent = '🎲';
  document.querySelector('.roll-result').textContent = '';
  document.querySelector('.current-player').textContent = 'Current: Player 1';
  document.querySelector('.winner-message').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
