////////////////////////////////////
// Pig Game - Advanced DOM Manipulation
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. getElementById VS querySelector
═══════════════════════════════════════════════════════════════

Two ways to select DOM elements. getElementById is slightly
faster because it only searches by ID, while querySelector
can use any CSS selector (class, ID, tag, etc.).

In the Pig Game, both are used:
*/

'use strict';

// getElementById - selects by ID only (no # needed)
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// querySelector - uses CSS selector syntax (# for ID, . for class)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// When to use which:
// getElementById:
//   - When selecting by ID
//   - Slightly faster performance
//   - Does NOT require the # symbol
//   - Returns null if not found

// querySelector:
//   - When selecting by class, tag, or complex CSS selectors
//   - More flexible
//   - REQUIRES # for IDs, . for classes
//   - Returns null if not found (first match only)

// Performance comparison:
// getElementById('score--0')     -> fast, direct lookup
// querySelector('#score--0')     -> slightly slower, parses CSS selector first

// Both work fine for most applications. Use getElementById when
// you know you're selecting by ID for a minor performance boost.
// Use querySelector for classes or when you need CSS selector power.

// Common mistake: Don't put # in getElementById!
// document.getElementById('#score--0');  // WRONG - won't find it
// document.getElementById('score--0');   // CORRECT


/*
═══════════════════════════════════════════════════════════════
2. GAME STATE MANAGEMENT
═══════════════════════════════════════════════════════════════

Game state = all the data that describes the current situation
of the game at any moment. In the Pig Game, the state is stored
in four variables declared with 'let' (because they change).
*/

// The four state variables:
let scores;        // Array: total scores for both players [player0, player1]
let currentScore;  // Number: the current round's accumulated score
let activePlayer;  // Number: 0 or 1, which player is currently playing
let playing;       // Boolean: is the game still active?

// Why 'let' and not 'const'?
// Because these values CHANGE throughout the game:
// - scores changes when a player holds
// - currentScore changes with each dice roll
// - activePlayer switches between 0 and 1
// - playing becomes false when someone wins

// Why are they declared WITHOUT initial values?
// Because the init() function sets them. This way, the same
// init function can be used to START the game and RESET it.

// The scores array pattern:
// scores = [0, 0];
// scores[0] = Player 1's total score
// scores[1] = Player 2's total score
// scores[activePlayer] = the CURRENT player's score (dynamic!)

// This is powerful because activePlayer is either 0 or 1,
// which perfectly matches array indices:
// scores[0] -> Player 1's score
// scores[1] -> Player 2's score

// Example of state at different moments:
// Game start:   scores=[0,0],  currentScore=0, activePlayer=0, playing=true
// After roll 5: scores=[0,0],  currentScore=5, activePlayer=0, playing=true
// After roll 3: scores=[0,0],  currentScore=8, activePlayer=0, playing=true
// After hold:   scores=[8,0],  currentScore=0, activePlayer=1, playing=true
// After roll 1: scores=[8,0],  currentScore=0, activePlayer=0, playing=true
// Player wins:  scores=[102,0],currentScore=0, activePlayer=0, playing=false


/*
═══════════════════════════════════════════════════════════════
3. classList.toggle
═══════════════════════════════════════════════════════════════

classList provides methods to add, remove, and toggle CSS classes
on an element. The toggle method is especially useful for
switching visual states back and forth.

In the Pig Game, toggle is used to switch the active player's
visual highlight.
*/

// classList methods:
// element.classList.add('className')     - adds the class
// element.classList.remove('className')  - removes the class
// element.classList.toggle('className')  - adds if missing, removes if present
// element.classList.contains('className') - returns true/false

// In the Pig Game, toggling is used for the active player:
// player0El.classList.toggle('player--active');
// player1El.classList.toggle('player--active');

// How toggle works step by step:
// Starting state: player0 has 'player--active', player1 does not

// After first toggle:
// player0El.classList.toggle('player--active');
// -> player0 HAD it, so REMOVE it. player0 is now inactive visually.

// player1El.classList.toggle('player--active');
// -> player1 did NOT have it, so ADD it. player1 is now active visually.

// After second toggle (switch back):
// player0El.classList.toggle('player--active');
// -> player0 does NOT have it, so ADD it. player0 is active again.

// player1El.classList.toggle('player--active');
// -> player1 HAS it, so REMOVE it. player1 is inactive again.

// This is much cleaner than using if/else:
// BAD approach:
// if (activePlayer === 0) {
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// } else {
//   player0El.classList.remove('player--active');
//   player1El.classList.add('player--active');
// }

// GOOD approach (what the Pig Game uses):
// player0El.classList.toggle('player--active');
// player1El.classList.toggle('player--active');
// Just two lines! Works because one always has it and the other doesn't.

// Other classList examples:
// diceEl.classList.add('hidden');     // Hide the dice image
// diceEl.classList.remove('hidden');  // Show the dice image


/*
═══════════════════════════════════════════════════════════════
4. DYNAMIC ELEMENT SELECTION WITH TEMPLATE LITERALS
═══════════════════════════════════════════════════════════════

Template literals can be used inside getElementById to
dynamically select elements based on variables. This is a
powerful pattern used in the Pig Game to target the correct
player's elements.
*/

// The Pig Game needs to update the current player's score display.
// Instead of using if/else to select the right element:

// BAD approach:
// if (activePlayer === 0) {
//   document.getElementById('current--0').textContent = currentScore;
// } else {
//   document.getElementById('current--1').textContent = currentScore;
// }

// GOOD approach using template literals:
// document.getElementById(`current--${activePlayer}`).textContent = currentScore;

// How it works:
// When activePlayer is 0: `current--${0}` → 'current--0'
// When activePlayer is 1: `current--${1}` → 'current--1'

// This pattern is used throughout the Pig Game:

// Update current score display:
// document.getElementById(`current--${activePlayer}`).textContent = currentScore;

// Update total score display:
// document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

// Select the active player's section:
// document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

// The key insight: activePlayer is always 0 or 1, and the HTML
// elements are named with --0 and --1 suffixes, making this
// dynamic selection possible.

// HTML structure that enables this pattern:
// <p id="score--0">0</p>     <p id="score--1">0</p>
// <p id="current--0">0</p>   <p id="current--1">0</p>
// <section class="player--0"> <section class="player--1">

// This is a common pattern in games and apps with multiple
// similar elements (players, cards, items, etc.)


/*
═══════════════════════════════════════════════════════════════
5. IMAGE SOURCE MANIPULATION
═══════════════════════════════════════════════════════════════

You can change any HTML attribute using JavaScript, including
the 'src' attribute of an <img> element. In the Pig Game,
this is how the dice face is updated.
*/

// The dice image in HTML:
// <img src="dice-5.png" alt="Playing dice" class="dice" />

// To change which dice face is shown, we change the src attribute:
// diceEl.src = `dice-${dice}.png`;

// If dice = 1: src becomes "dice-1.png"
// If dice = 2: src becomes "dice-2.png"
// If dice = 3: src becomes "dice-3.png"
// If dice = 4: src becomes "dice-4.png"
// If dice = 5: src becomes "dice-5.png"
// If dice = 6: src becomes "dice-6.png"

// This works because we have 6 image files named consistently:
// dice-1.png, dice-2.png, dice-3.png, dice-4.png, dice-5.png, dice-6.png

// Full context in the Pig Game:
// const dice = Math.trunc(Math.random() * 6) + 1;  // Random 1-6
// diceEl.classList.remove('hidden');                   // Show the dice
// diceEl.src = `dice-${dice}.png`;                    // Set correct face

// Other attribute manipulations you can do:
// element.src = 'new-image.png';       // Change image source
// element.href = 'https://...';        // Change link URL
// element.alt = 'New description';     // Change alt text
// element.id = 'new-id';               // Change element ID

// Showing and hiding the dice:
// diceEl.classList.add('hidden');    // Hide dice (game start, after winning)
// diceEl.classList.remove('hidden'); // Show dice (after rolling)

// The 'hidden' class in CSS is simply:
// .hidden { display: none; }


/*
═══════════════════════════════════════════════════════════════
6. THE INIT / RESET PATTERN
═══════════════════════════════════════════════════════════════

Centralizing game initialization in a single function makes
it easy to both start the game AND reset it. The same function
handles both cases.
*/

// The init function in the Pig Game:
const init = function () {
  // 1. Reset all state variables
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // 2. Reset all DOM elements to starting state
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // 3. Reset all visual states
  diceEl.classList.add('hidden');                  // Hide dice
  player0El.classList.remove('player--winner');     // Remove winner style
  player1El.classList.remove('player--winner');     // Remove winner style
  player0El.classList.add('player--active');        // Player 1 starts
  player1El.classList.remove('player--active');     // Player 2 inactive
};

// Call init() immediately to set up the game
init();

// Also use init as the handler for the "New Game" button:
// btnNew.addEventListener('click', init);

// Why this pattern is powerful:
// 1. DRY (Don't Repeat Yourself) - one function for start AND reset
// 2. Single source of truth - all initial values in one place
// 3. Easy to modify - change starting conditions in one location
// 4. Prevents bugs - no forgotten state from previous game

// Common mistake: NOT resetting everything
// If you forget to reset the 'playing' flag, the game won't
// work after the first win. If you forget to remove 'player--winner',
// the winning style stays visible.

// The pattern structure:
// 1. function init() { /* reset state + DOM */ }
// 2. init();  // Call on page load
// 3. resetButton.addEventListener('click', init);  // Call on reset


/*
═══════════════════════════════════════════════════════════════
7. COMPLEX GAME LOGIC
═══════════════════════════════════════════════════════════════

The Pig Game combines multiple concepts: random number generation,
conditional logic, DOM updates, and state management into
cohesive game actions.
*/

// === ROLLING DICE ===
// 1. Generate random number (1-6)
// 2. Display the dice
// 3. If NOT 1: add to current score and display
// 4. If 1: switch to next player

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;  // Toggle between 0 and 1
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Math.random() -> 0 to 0.999...
    // * 6           -> 0 to 5.999...
    // Math.trunc()  -> 0 to 5 (removes decimals)
    // + 1           -> 1 to 6

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// === HOLDING SCORE ===
// 1. Add current score to the active player's total
// 2. Update the score display
// 3. Check if player has won (>= 100)
// 4. If yes: end game, show winner
// 5. If no: switch to next player

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's total
    scores[activePlayer] += currentScore;

    // 2. Update score display
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 3. Check for win condition
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// === SWITCH PLAYER LOGIC ===
// The switchPlayer function does 4 things:
// 1. Reset the current player's displayed current score to 0
// 2. Reset the currentScore variable to 0
// 3. Toggle activePlayer between 0 and 1 using ternary operator
// 4. Toggle the visual active state for both players

// The ternary operator for toggling:
// activePlayer = activePlayer === 0 ? 1 : 0;
// This reads as: "If activePlayer is 0, set it to 1, otherwise set it to 0"
// It's equivalent to:
// if (activePlayer === 0) { activePlayer = 1; } else { activePlayer = 0; }


/*
═══════════════════════════════════════════════════════════════
8. THE "playing" FLAG PATTERN
═══════════════════════════════════════════════════════════════

A boolean flag variable that controls whether game actions
should be processed. This prevents players from rolling or
holding after the game has ended.
*/

// The 'playing' variable is declared as part of the game state:
// let playing;

// In init(), it's set to true:
// playing = true;

// Every action checks the flag FIRST:
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // ... dice rolling logic only runs if game is active
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // ... hold logic only runs if game is active
//   }
// });

// When a player wins, the flag is set to false:
// if (scores[activePlayer] >= 100) {
//   playing = false;
//   // ... winner display logic
// }

// After this, clicking Roll or Hold does NOTHING because
// the if(playing) check fails.

// The flag is reset to true when starting a new game:
// init() sets playing = true;

// Why this pattern is important:
// 1. Prevents invalid game actions after game over
// 2. Simple boolean check instead of complex conditions
// 3. Easy to understand: playing = true means game is on
// 4. Centralized control: one variable controls all actions

// Common use cases for flag patterns:
// - Game state (playing, paused, gameOver)
// - Form submission (isSubmitting - prevent double submit)
// - Loading state (isLoading - show spinner)
// - Toggle features (isDarkMode, isMuted)

// NEW GAME resets everything:
btnNew.addEventListener('click', init);
// This calls init() which sets playing = true,
// re-enabling all game actions.


/*
═══════════════════════════════════════════════════════════════
SUMMARY - PIG GAME CONCEPTS
═══════════════════════════════════════════════════════════════

getElementById vs querySelector:
- getElementById: fast, ID only, no # needed
- querySelector: flexible, any CSS selector, # and . needed

GAME STATE MANAGEMENT:
- Store game state in variables (let for mutable state)
- scores array indexed by activePlayer for dynamic access
- currentScore, activePlayer, playing flag

classList.toggle:
- Adds class if missing, removes if present
- Perfect for toggling between two states
- Used for switching active player visual

DYNAMIC SELECTION:
- Template literals in selectors: `current--${activePlayer}`
- Enables one line of code to handle multiple players
- Works with both getElementById and querySelector

IMAGE MANIPULATION:
- Change src attribute: diceEl.src = `dice-${dice}.png`
- Hide/show with classList: add('hidden') / remove('hidden')

INIT/RESET PATTERN:
- One function to initialize AND reset
- Resets both state variables and DOM
- Called on load and on "New Game" button click

GAME LOGIC:
- Rolling: random number, display, add or switch
- Holding: add to total, check win, switch
- Switching: reset current, toggle player, toggle visuals

PLAYING FLAG:
- Boolean that gates all game actions
- Set true in init, false on win
- Every action handler checks if(playing) first
*/
