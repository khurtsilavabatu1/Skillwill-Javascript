////////////////////////////////////
// Modal Window Project
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. querySelector VS querySelectorAll
═══════════════════════════════════════════════════════════════

querySelector selects ONE element — the first match it finds.
querySelectorAll selects ALL matching elements and returns a
NodeList (an array-like collection).
*/

'use strict';

// querySelector — returns a SINGLE element (or null if not found)
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

console.log(modal);        // <div class="modal hidden">...</div>
console.log(btnCloseModal); // <button class="close-modal">×</button>

// querySelectorAll — returns a NODELIST of ALL matching elements
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal); // NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
console.log(btnsOpenModal.length); // 3

// What is a NodeList?
// - It looks like an array but it's NOT a real array
// - It has .length property
// - You can access elements by index: btnsOpenModal[0], btnsOpenModal[1]
// - But it does NOT have most array methods (push, pop, indexOf, etc.)

// Common mistake: using querySelector when you need querySelectorAll
// document.querySelector('.show-modal') — only gets the FIRST button!
// document.querySelectorAll('.show-modal') — gets ALL 3 buttons!

// Other selectors work too:
// document.querySelector('#myId')         — select by ID
// document.querySelector('h1')            — select by tag name
// document.querySelector('.parent .child') — select nested elements


/*
═══════════════════════════════════════════════════════════════
2. classList — add, remove, contains, toggle
═══════════════════════════════════════════════════════════════

classList is a property on DOM elements that lets you manipulate
CSS classes without touching the entire className string. It has
four essential methods.
*/

// ---- classList.add() ----
// Adds one or more classes to the element
modal.classList.add('hidden');
console.log(modal.className); // "modal hidden"

// You can add multiple classes at once
// modal.classList.add('hidden', 'fade-out');

// ---- classList.remove() ----
// Removes one or more classes from the element
modal.classList.remove('hidden');
console.log(modal.className); // "modal"

// You can remove multiple classes at once
// modal.classList.remove('hidden', 'fade-out');

// ---- classList.contains() ----
// Checks if the element has a specific class — returns true/false
const isHidden = modal.classList.contains('hidden');
console.log(isHidden); // false (because we just removed it)

if (modal.classList.contains('hidden')) {
  console.log('Modal is hidden');
} else {
  console.log('Modal is visible');
}

// ---- classList.toggle() ----
// Adds the class if it's NOT present, removes it if it IS present
modal.classList.toggle('hidden');
// If 'hidden' was absent -> now added
// If 'hidden' was present -> now removed

// Why NOT use className directly?
// modal.className = 'hidden';  // OVERWRITES all classes! 'modal' class is lost!
// classList.add('hidden');      // ADDS 'hidden' while keeping 'modal' class

// SUMMARY TABLE:
// Method            | What it does                     | Returns
// ------------------|----------------------------------|----------
// classList.add()   | Adds class(es) to element        | undefined
// classList.remove()| Removes class(es) from element   | undefined
// classList.contains()| Checks if class exists         | true/false
// classList.toggle()| Adds if absent, removes if present| true/false


/*
═══════════════════════════════════════════════════════════════
3. THE HIDDEN CLASS PATTERN
═══════════════════════════════════════════════════════════════

A very common pattern in web development: use a CSS class to
hide/show elements instead of directly manipulating styles in
JavaScript.
*/

// In CSS, we define:
// .hidden {
//   display: none;
// }

// In HTML, elements start with the 'hidden' class:
// <div class="modal hidden">...</div>
// <div class="overlay hidden"></div>

// To SHOW an element — remove the 'hidden' class:
// modal.classList.remove('hidden');
// overlay.classList.remove('hidden');

// To HIDE an element — add the 'hidden' class:
// modal.classList.add('hidden');
// overlay.classList.add('hidden');

// Why this pattern instead of style.display?
//
// BAD approach (inline styles):
// modal.style.display = 'none';   // Hard to manage
// modal.style.display = 'block';  // What was the original display value?
//
// GOOD approach (CSS class):
// modal.classList.add('hidden');    // Clean, simple
// modal.classList.remove('hidden'); // Restores original CSS display
//
// Advantages of the class approach:
// 1. Keeps styling in CSS where it belongs
// 2. Easy to add transitions/animations
// 3. Works regardless of the original display value (block, flex, grid...)
// 4. Can hide/show with a single line of code
// 5. Easy to check state: modal.classList.contains('hidden')


/*
═══════════════════════════════════════════════════════════════
4. WORKING WITH MULTIPLE ELEMENTS (Looping over NodeList)
═══════════════════════════════════════════════════════════════

When querySelectorAll returns multiple elements, we need a
for loop to attach event listeners to each one.
*/

// We have 3 buttons with class 'show-modal'
const buttons = document.querySelectorAll('.show-modal');
console.log(buttons.length); // 3

// Loop through all buttons and add click event listener to each
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    console.log(`Button ${i + 1} clicked!`);
    // Open the modal
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// How this works:
// i = 0 -> buttons[0].addEventListener('click', ...)  -> first button
// i = 1 -> buttons[1].addEventListener('click', ...)  -> second button
// i = 2 -> buttons[2].addEventListener('click', ...)  -> third button

// You can also read text from each button:
for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i].textContent);
  // "Show modal 1", "Show modal 2", "Show modal 3"
}

// KEY POINT: Without the loop, only ONE button would work
// buttons.addEventListener('click', ...) -> ERROR! NodeList doesn't have addEventListener
// You MUST loop through the NodeList and add listeners individually


/*
═══════════════════════════════════════════════════════════════
5. KEYBOARD EVENTS (keydown, keyup, keypress, event object)
═══════════════════════════════════════════════════════════════

JavaScript can listen for keyboard events. These are "global"
events, meaning they happen on the whole document, not on a
specific element.
*/

// Three types of keyboard events:
// keydown  -> fires when a key is PRESSED DOWN (most commonly used)
// keyup    -> fires when a key is RELEASED
// keypress -> fires when a key is PRESSED (deprecated — don't use!)

// Keyboard events are added to the DOCUMENT, not to a specific element
document.addEventListener('keydown', function (e) {
  // 'e' is the EVENT OBJECT — automatically passed by the browser
  // It contains information about what happened

  console.log(e);       // KeyboardEvent object with many properties
  console.log(e.key);   // The name of the key that was pressed
  console.log(e.code);  // The physical key code

  // Examples of e.key values:
  // 'Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'a', 'b', ' ' (space)

  // Examples of e.code values:
  // 'Escape', 'Enter', 'ArrowUp', 'KeyA', 'KeyB', 'Space'
});

// Practical example: close modal with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    console.log('Escape was pressed!');
    // Close the modal
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// Checking multiple conditions:
// Close modal ONLY if it's currently visible
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// The event object (e):
// - e.key      -> the key value: 'Escape', 'Enter', 'a', etc.
// - e.code     -> physical key code: 'Escape', 'Enter', 'KeyA', etc.
// - e.type     -> event type: 'keydown', 'keyup', etc.
// - e.repeat   -> true if the key is held down (auto-repeat)
// - e.altKey   -> true if Alt was held during the event
// - e.ctrlKey  -> true if Ctrl was held during the event
// - e.shiftKey -> true if Shift was held during the event


/*
═══════════════════════════════════════════════════════════════
6. OVERLAY PATTERN (Modal + Overlay Combination)
═══════════════════════════════════════════════════════════════

The overlay pattern uses two elements together:
- A modal window (the content popup)
- An overlay (a dark/blurred background behind the modal)

Both must be shown and hidden together.
*/

// HTML structure:
// <div class="modal hidden">
//   <button class="close-modal">&times;</button>
//   <h1>I'm a modal window</h1>
//   <p>Modal content here...</p>
// </div>
// <div class="overlay hidden"></div>

// CSS for the overlay:
// .overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.6);
//   backdrop-filter: blur(3px);
//   z-index: 5;
// }
//
// .modal {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 10;    /* Higher than overlay! */
// }

// The modal must have a HIGHER z-index than the overlay
// so it appears on top of the dark background.

// Three ways to close the modal:
// 1. Click the close button (X)
// 2. Click the overlay (dark background)
// 3. Press the Escape key

// Closing by clicking the overlay:
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Closing by clicking the X button:
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Why show/hide BOTH modal and overlay together?
// If you only hide the modal but not the overlay,
// the dark background stays and the user can't interact
// with the page behind it!


/*
═══════════════════════════════════════════════════════════════
7. REUSABLE FUNCTIONS (openModal, closeModal — DRY Principle)
═══════════════════════════════════════════════════════════════

DRY = Don't Repeat Yourself. When the same code appears in
multiple places, extract it into a reusable function.
*/

// WITHOUT DRY — code is repeated 5 times! (BAD)
//
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');      // repeated
//     overlay.classList.remove('hidden');     // repeated
//   });
//
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');           // repeated
//   overlay.classList.add('hidden');         // repeated
// });
//
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');           // repeated
//   overlay.classList.add('hidden');         // repeated
// });
//
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     modal.classList.add('hidden');         // repeated
//     overlay.classList.add('hidden');       // repeated
//   }
// });

// WITH DRY — extract into reusable functions (GOOD)

const openModal2 = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal2 = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Now use these functions everywhere:
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal2);
  // NOTE: We pass the function reference (openModal2)
  // NOT a function call (openModal2())

btnCloseModal.addEventListener('click', closeModal2);
overlay.addEventListener('click', closeModal2);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal2();
  }
});

// IMPORTANT: Function reference vs function call
//
// addEventListener('click', closeModal2)    CORRECT
// -> Passes the function itself. Browser will call it when clicked.
//
// addEventListener('click', closeModal2())  WRONG!
// -> Calls the function IMMEDIATELY and passes its return value (undefined)
// -> The function runs once when the code loads, NOT when clicked

// Benefits of DRY:
// 1. Less code to write and maintain
// 2. Changes only need to be made in ONE place
// 3. Fewer bugs — fix one function instead of multiple copies
// 4. Code is more readable and organized

// Example: If we later want to add an animation when closing,
// we only modify closeModal — all three close triggers get the update!


/*
═══════════════════════════════════════════════════════════════
SUMMARY — MODAL WINDOW PROJECT
═══════════════════════════════════════════════════════════════

querySelector vs querySelectorAll:
- querySelector: returns ONE element (first match)
- querySelectorAll: returns a NodeList of ALL matches
- NodeList has .length and index access, but is NOT an array

classList Methods:
- .add('class')      — adds a CSS class
- .remove('class')   — removes a CSS class
- .contains('class') — checks if class exists (true/false)
- .toggle('class')   — adds if absent, removes if present

Hidden Class Pattern:
- CSS: .hidden { display: none; }
- Show: element.classList.remove('hidden')
- Hide: element.classList.add('hidden')
- Better than using style.display directly

Working with Multiple Elements:
- querySelectorAll returns NodeList
- Use for loop to iterate and add event listeners
- Must add listener to EACH element individually

Keyboard Events:
- keydown: most common, fires on key press
- keyup: fires on key release
- Added to document, not individual elements
- Event object (e): e.key, e.code, e.type

Overlay Pattern:
- Modal (content) + Overlay (dark background)
- Both must show/hide together
- Modal z-index > Overlay z-index
- Close via: X button, overlay click, Escape key

DRY Principle:
- Extract repeated code into functions
- Pass function REFERENCE to addEventListener, not a call
- openModal and closeModal — reusable everywhere
*/
