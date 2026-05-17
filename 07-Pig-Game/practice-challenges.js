'use strict';

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


////////////////////////////////////
// Practice Challenge #2 - Memory Card Game (Simplified)
// (Flip Cards, Match Pairs, Track Attempts)

/*
Build a simplified memory card game that runs in the console.
The game has pairs of numbers hidden on a "board" and the player
tries to find matching pairs.

1. Create a function 'createBoard' that:
   - Takes a size parameter (number of pairs)
   - Creates an array of pairs: [1,1,2,2,3,3,...] for the given size
   - Shuffles the array (use a simple shuffle algorithm below)
   - Returns the shuffled array
   HINT: To shuffle, loop through the array from end to start,
         swapping each element with a random earlier element

2. Declare game state variables with 'let':
   board, revealedBoard, attempts, matchesFound, totalPairs, playing

3. Create an init function that:
   - Sets totalPairs to 4 (4 pairs = 8 cards)
   - Creates the board using createBoard(totalPairs)
   - Creates revealedBoard as an array of false values (same length as board)
   - Sets attempts to 0 and matchesFound to 0
   - Sets playing to true
   - Logs the board size and "Find all pairs!"
   Call init() immediately.

4. Create a function 'displayBoard' that:
   - Loops through the board
   - Shows the number if revealedBoard[i] is true, otherwise shows '?'
   - Logs the display: "[ ? ? 3 ? ? 3 ? ? ]"

5. Create a function 'flipCard' that takes an index:
   - Checks playing flag first
   - Checks if card is already revealed (skip if yes)
   - Reveals the card (set revealedBoard[index] to true)
   - Returns the value at board[index]

6. Create a function 'playTurn' that takes two indices:
   - Checks playing flag
   - Flips both cards
   - Increments attempts
   - Checks if values match
   - If match: log "Match found!", increment matchesFound
   - If no match: hide both cards again, log "No match!"
   - Check if all pairs found (matchesFound === totalPairs)
   - If yes: set playing to false, log victory with attempts count

TEST DATA: Use totalPairs = 4 (8 cards)
EXPECTED: Board shuffled randomly, find all 4 pairs

HINT: A simple shuffle: for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.trunc(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
      }

GOOD LUCK :)
*/

// const createBoard = function (size) {
//   const board = [];
//   for (let i = 1; i <= size; i++) {
//     board.push(i);
//     board.push(i);
//   }
//   // Shuffle (Fisher-Yates)
//   for (let i = board.length - 1; i > 0; i--) {
//     const j = Math.trunc(Math.random() * (i + 1));
//     [board[i], board[j]] = [board[j], board[i]];
//   }
//   return board;
// };

// let board, revealedBoard, attempts, matchesFound, totalPairs, playing;

// const init = function () {
//   totalPairs = 4;
//   board = createBoard(totalPairs);
//   revealedBoard = new Array(board.length).fill(false);
//   attempts = 0;
//   matchesFound = 0;
//   playing = true;
//   console.log(`Memory Game: ${totalPairs} pairs (${board.length} cards). Find all pairs!`);
// };
// init();

// const displayBoard = function () {
//   let display = '[ ';
//   for (let i = 0; i < board.length; i++) {
//     display += revealedBoard[i] ? `${board[i]} ` : '? ';
//   }
//   display += ']';
//   console.log(display);
// };

// const flipCard = function (index) {
//   if (!playing) return -1;
//   if (revealedBoard[index]) return -1;
//   revealedBoard[index] = true;
//   return board[index];
// };

// const playTurn = function (index1, index2) {
//   if (!playing) return;
//   if (index1 === index2) {
//     console.log('Pick two different cards!');
//     return;
//   }

//   const val1 = flipCard(index1);
//   const val2 = flipCard(index2);

//   if (val1 === -1 || val2 === -1) {
//     console.log('Invalid card selection!');
//     return;
//   }

//   attempts++;

//   if (val1 === val2) {
//     console.log(`Attempt ${attempts}: Match found! (${val1} = ${val2})`);
//     matchesFound++;
//   } else {
//     console.log(`Attempt ${attempts}: No match (${val1} vs ${val2})`);
//     revealedBoard[index1] = false;
//     revealedBoard[index2] = false;
//   }

//   displayBoard();

//   if (matchesFound === totalPairs) {
//     playing = false;
//     console.log(`Congratulations! All pairs found in ${attempts} attempts!`);
//   }
// };

// // Simulate a game - try some turns
// console.log('Hidden board (for reference):', board);
// displayBoard();
// // Example turns (positions depend on shuffled board):
// playTurn(0, 1);
// playTurn(2, 3);
// playTurn(4, 5);
// playTurn(6, 7);


////////////////////////////////////
// Practice Challenge #3 - Speed Typing Game
// (Display Random Word, Track Correct/Wrong, Timer with Game State)

/*
Build a speed typing game simulator that runs in the console.
The game shows random words and the player "types" them (simulated).

1. Create a word bank array with at least 10 words:
   ['javascript', 'function', 'variable', 'array', 'object',
    'boolean', 'string', 'number', 'class', 'const']

2. Declare game state variables with 'let':
   correctCount, wrongCount, currentWord, wordsPlayed, maxWords, playing

3. Create an init function that:
   - Sets correctCount and wrongCount to 0
   - Sets wordsPlayed to 0
   - Sets maxWords to 5 (game ends after 5 words)
   - Sets playing to true
   - Sets currentWord to a random word from the word bank
   - Logs "Speed Typing Game! Type the words correctly."
   Call init() immediately.

4. Create a function 'getRandomWord' that:
   - Returns a random word from the word bank
   - Uses Math.trunc(Math.random() * wordBank.length)

5. Create a function 'showWord' that:
   - Logs the current word to type: "Type this word: javascript"
   - Returns the currentWord

6. Create a function 'submitAnswer' that takes the player's input string:
   - Checks playing flag first
   - Compares input with currentWord (case-insensitive using toLowerCase)
   - If correct: increment correctCount, log "Correct!"
   - If wrong: increment wrongCount, log "Wrong! The word was: [word]"
   - Increment wordsPlayed
   - Check if wordsPlayed >= maxWords
   - If yes: set playing to false, call a showResults function
   - If no: set currentWord to a new random word and show it

7. Create a function 'showResults' that:
   - Logs total words, correct count, wrong count
   - Calculates and logs accuracy percentage
   - Uses template literals for formatted output:
     "Results: 4/5 correct (80% accuracy)"

TEST DATA: Simulate with correct and incorrect answers
EXPECTED: Game tracks score across 5 words and shows results

HINT: To simulate typing, just call submitAnswer with strings
HINT: For case-insensitive comparison: input.toLowerCase() === word.toLowerCase()

GOOD LUCK :)
*/

// const wordBank = [
//   'javascript', 'function', 'variable', 'array', 'object',
//   'boolean', 'string', 'number', 'class', 'const'
// ];

// let correctCount, wrongCount, currentWord, wordsPlayed, maxWords, playing;

// const getRandomWord = function () {
//   return wordBank[Math.trunc(Math.random() * wordBank.length)];
// };

// const init = function () {
//   correctCount = 0;
//   wrongCount = 0;
//   wordsPlayed = 0;
//   maxWords = 5;
//   playing = true;
//   currentWord = getRandomWord();
//   console.log('Speed Typing Game! Type the words correctly.');
//   console.log(`You will have ${maxWords} words. Good luck!`);
// };
// init();

// const showWord = function () {
//   console.log(`\nType this word: "${currentWord}"`);
//   return currentWord;
// };

// const showResults = function () {
//   const accuracy = Math.round((correctCount / maxWords) * 100);
//   console.log('\n--- Game Over ---');
//   console.log(`Results: ${correctCount}/${maxWords} correct (${accuracy}% accuracy)`);
//   console.log(`Correct: ${correctCount} | Wrong: ${wrongCount}`);

//   if (accuracy >= 80) {
//     console.log('Excellent typing!');
//   } else if (accuracy >= 60) {
//     console.log('Good effort, keep practicing!');
//   } else {
//     console.log('Keep practicing to improve your accuracy!');
//   }
// };

// const submitAnswer = function (input) {
//   if (!playing) {
//     console.log('Game is over! Call init() to play again.');
//     return;
//   }

//   if (input.toLowerCase() === currentWord.toLowerCase()) {
//     correctCount++;
//     console.log('Correct!');
//   } else {
//     wrongCount++;
//     console.log(`Wrong! The word was: "${currentWord}"`);
//   }

//   wordsPlayed++;

//   if (wordsPlayed >= maxWords) {
//     playing = false;
//     showResults();
//   } else {
//     currentWord = getRandomWord();
//     showWord();
//   }
// };

// // Simulate a game
// showWord();
// submitAnswer(currentWord);           // Correct (use actual word)
// submitAnswer('wrong-answer');         // Wrong
// submitAnswer(currentWord);           // Correct (use actual word)
// submitAnswer(currentWord);           // Correct (use actual word)
// submitAnswer('typo');                // Wrong


////////////////////////////////////
// Practice Challenge #4 - Turn-Based Math Game
// (Players Solve Random Math Problems, First to 5 Correct Wins)

/*
Build a turn-based math game for two players. Each turn, the active
player gets a random math problem. If they answer correctly, they score
a point. First player to 5 correct answers wins.

1. Declare game state variables with 'let':
   scores, activePlayer, playing, currentProblem, currentAnswer

2. Create an init function that:
   - Sets scores to [0, 0]
   - Sets activePlayer to 0
   - Sets playing to true
   - Logs "Math Battle! First to 5 correct answers wins!"
   Call init() immediately.

3. Create a function 'generateProblem' that:
   - Generates two random numbers (1-20)
   - Randomly picks an operation: +, -, or *
   - Calculates the correct answer
   - Stores the problem string in currentProblem
   - Stores the answer in currentAnswer
   - Returns the problem string: "15 + 7 = ?"

4. Create a function 'switchPlayer' that:
   - Toggles activePlayer between 0 and 1
   - Logs "Player [n]'s turn!" using template literal with activePlayer

5. Create a function 'submitAnswer' that takes a number:
   - Checks playing flag first
   - Compares with currentAnswer
   - If correct: increment scores[activePlayer], log "Correct!"
   - If wrong: log "Wrong! The answer was [currentAnswer]"
   - Log current scores: "Scores: Player 1: 3 | Player 2: 2"
   - Check if scores[activePlayer] >= 5
   - If yes: set playing to false, log winner with template literal:
     "Player [n] wins the Math Battle!"
   - If no: switch player and generate new problem

6. Simulate a full game by using a while loop:
   - Generate a problem, show it, submit the correct answer
     (to simulate a correct answer) or a wrong answer randomly
   - Continue while playing is true (add safety counter)

TEST DATA: Random math problems
EXPECTED: Game alternates between players until one reaches 5

HINT: Use Math.trunc(Math.random() * 20) + 1 for random 1-20
HINT: Use scores[activePlayer] like the Pig Game
HINT: For random operation, use an array ['+', '-', '*'] with random index

GOOD LUCK :)
*/

const wordBankCh4 = ['+', '-', '*'];

let scoresCh4, activePlayerCh4, playingCh4, currentProblem, currentAnswer;

const initCh4 = function () {
  scoresCh4 = [0, 0];
  activePlayerCh4 = 0;
  playingCh4 = true;
  currentProblem = '';
  currentAnswer = 0;
  console.log('Math Battle! First to 5 correct answers wins!');
};
initCh4();

const generateProblem = function () {
  const num1 = Math.trunc(Math.random() * 20) + 1;
  const num2 = Math.trunc(Math.random() * 20) + 1;
  const opIndex = Math.trunc(Math.random() * 3);
  const op = wordBankCh4[opIndex];

  if (op === '+') {
    currentAnswer = num1 + num2;
  } else if (op === '-') {
    currentAnswer = num1 - num2;
  } else {
    currentAnswer = num1 * num2;
  }

  currentProblem = `${num1} ${op} ${num2}`;
  return `${currentProblem} = ?`;
};

const switchPlayerCh4 = function () {
  activePlayerCh4 = activePlayerCh4 === 0 ? 1 : 0;
  console.log(`Player ${activePlayerCh4 + 1}'s turn!`);
};

const submitAnswerCh4 = function (answer) {
  if (!playingCh4) return;

  if (answer === currentAnswer) {
    scoresCh4[activePlayerCh4]++;
    console.log(
      `Player ${activePlayerCh4 + 1} answers ${currentProblem} = ${answer} - Correct!`
    );
  } else {
    console.log(
      `Player ${activePlayerCh4 + 1} answers ${currentProblem} = ${answer} - Wrong! Answer was ${currentAnswer}`
    );
  }

  console.log(
    `Scores: Player 1: ${scoresCh4[0]} | Player 2: ${scoresCh4[1]}`
  );

  if (scoresCh4[activePlayerCh4] >= 5) {
    playingCh4 = false;
    console.log(
      `\nPlayer ${activePlayerCh4 + 1} wins the Math Battle! Final: ${scoresCh4[0]}-${scoresCh4[1]}`
    );
  } else {
    switchPlayerCh4();
    const problem = generateProblem();
    console.log(`Solve: ${problem}`);
  }
};

// Simulate a full game
console.log('\n--- Math Battle Simulation ---');
let problem = generateProblem();
console.log(`Player 1's turn!`);
console.log(`Solve: ${problem}`);

let safetyCh4 = 0;
while (playingCh4 && safetyCh4 < 30) {
  // Randomly decide if player answers correctly (70% chance)
  const answersCorrectly = Math.random() < 0.7;
  const playerAnswer = answersCorrectly
    ? currentAnswer
    : currentAnswer + Math.trunc(Math.random() * 5) + 1;

  submitAnswerCh4(playerAnswer);
  safetyCh4++;
}
