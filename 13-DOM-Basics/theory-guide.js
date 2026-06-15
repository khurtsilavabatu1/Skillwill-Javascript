////////////////////////////////////
// DOM Basics
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. WHAT IS THE DOM?
═══════════════════════════════════════════════════════════════

The DOM (Document Object Model) is a tree-like representation
of an HTML document that the browser creates in memory.
JavaScript uses this tree to read, modify, and delete elements
on the page — making websites interactive and dynamic.

Key concepts:
- The browser parses HTML and builds a tree of "nodes"
- Every HTML tag becomes an Element node
- Text inside tags becomes a Text node
- The top-level entry point is the `document` object
- Nodes vs Elements: all elements are nodes, but not all
  nodes are elements (text, comments are also nodes)
*/

'use strict';

// The document object — the root of the DOM tree
console.log(document); // The entire HTML document
console.log(document.documentElement); // The <html> element
console.log(document.head); // The <head> element
console.log(document.body); // The <body> element
console.log(document.title); // The page <title> text

// Nodes vs Elements
console.log(document.body.childNodes); // NodeList — ALL nodes (text, comments, elements)
console.log(document.body.children); // HTMLCollection — ONLY element nodes

// Node types — each node has a numeric nodeType
// 1 = Element, 3 = Text, 8 = Comment
console.log(document.body.nodeType); // 1 (Element)


/*
═══════════════════════════════════════════════════════════════
2. getElementById
═══════════════════════════════════════════════════════════════

Selects a single element by its unique id attribute.
Returns the Element if found, or null if no match exists.
IDs must be unique in a document — only one element per ID.
*/

// HTML: <h1 id="main-title">Welcome to Tbilisi</h1>
const title = document.getElementById('main-title');
console.log(title); // <h1 id="main-title">Welcome to Tbilisi</h1>
console.log(title.textContent); // 'Welcome to Tbilisi'

// Modifying the element
title.textContent = 'Gamarjoba, Tbilisi!';
title.style.color = 'darkblue';

// Returns null when the element doesn't exist
const missing = document.getElementById('nonexistent');
console.log(missing); // null

// Always check for null before using the result
if (missing) {
  missing.textContent = 'Found!';
} else {
  console.log('Element not found');
}

// Practical example — updating a user profile card
// HTML: <p id="user-name">Giorgi Beridze</p>
//       <p id="user-age">28</p>
const userName = document.getElementById('user-name');
const userAge = document.getElementById('user-age');

if (userName) userName.textContent = 'Nino Kapanadze';
if (userAge) userAge.textContent = '25';


/*
═══════════════════════════════════════════════════════════════
3. querySelector
═══════════════════════════════════════════════════════════════

Selects the FIRST element that matches a CSS selector string.
Returns the Element if found, or null if no match exists.
The most versatile selection method — any valid CSS selector works.
*/

const header = document.querySelector('#main-title'); // By ID
const card = document.querySelector('.card'); // By class
const firstParagraph = document.querySelector('p'); // By tag
const emailInput = document.querySelector('input[type="email"]'); // By attribute
const cardText = document.querySelector('div.card > p'); // Combined
const profileSpan = document.querySelector('.profile span'); // Descendant

// Pseudo-class selectors
const firstItem = document.querySelector('li:first-child');
const lastItem = document.querySelector('li:last-child');
const thirdItem = document.querySelector('li:nth-child(3)');

// Multiple conditions — element with two classes
const activeCard = document.querySelector('.card.active');

// Practical example — select active nav link
// HTML: <nav class="main-nav"><a class="nav-link active">Home</a></nav>
const activeLink = document.querySelector('.main-nav .nav-link.active');
if (activeLink) {
  console.log(activeLink.className); // 'nav-link active'
  console.log(activeLink.textContent); // 'Home'
}


/*
═══════════════════════════════════════════════════════════════
4. querySelectorAll
═══════════════════════════════════════════════════════════════

Selects ALL elements matching a CSS selector.
Returns a static NodeList (won't update if the DOM changes).
Unlike HTMLCollection, NodeList supports forEach directly.
*/

// Select all paragraphs
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs); // NodeList [p, p, p, ...]
console.log(allParagraphs.length); // Number of matches

// forEach works on NodeList
allParagraphs.forEach(function (paragraph, index) {
  console.log(`Paragraph ${index + 1}: ${paragraph.textContent}`);
});

// Access by index (0-based)
console.log(allParagraphs[0]); // First <p>
console.log(allParagraphs[allParagraphs.length - 1]); // Last <p>

// Complex selectors work too
const allListLinks = document.querySelectorAll('ul.menu > li > a');

// Practical example — style items in a student list
// HTML: <ul class="students">
//         <li>Giorgi</li><li>Nino</li><li>Dato</li><li>Ana</li>
//       </ul>
const students = document.querySelectorAll('.students li');

students.forEach(function (student, i) {
  student.style.backgroundColor = i % 2 === 0 ? '#f0f0f0' : '#ffffff';
});

// Converting NodeList to array (for map, filter, reduce)
const studentNames = Array.from(students).map(el => el.textContent);
console.log(studentNames); // ['Giorgi', 'Nino', 'Dato', 'Ana']


/*
═══════════════════════════════════════════════════════════════
5. getElementsByClassName
═══════════════════════════════════════════════════════════════

Selects all elements with the given class name.
Returns a LIVE HTMLCollection — it automatically updates
when elements are added or removed from the DOM.
HTMLCollection does NOT have forEach — use a for loop
or convert to an array first.
*/

// HTML: <div class="product">Khinkali</div>
//       <div class="product">Churchkhela</div>
//       <div class="product">Khachapuri</div>
const products = document.getElementsByClassName('product');
console.log(products.length); // 3
console.log(products[0].textContent); // 'Khinkali'

// HTMLCollection does NOT support forEach:
// products.forEach(...) // TypeError!

// Use a classic for loop instead
for (let i = 0; i < products.length; i++) {
  console.log(`Product ${i + 1}: ${products[i].textContent}`);
}

// Or convert to array first
Array.from(products).forEach(function (product) {
  product.style.fontWeight = 'bold';
});

// LIVE vs STATIC — the key difference:
// If you add a new element with class "product" to the DOM,
// the `products` HTMLCollection updates automatically.
// A querySelectorAll NodeList would NOT update.


/*
═══════════════════════════════════════════════════════════════
6. getElementsByTagName
═══════════════════════════════════════════════════════════════

Selects all elements with the given tag name.
Returns a live HTMLCollection, same as getElementsByClassName.
Can be called on any element, not just document — useful
for scoped searches within a specific parent.
*/

// Select all <li> elements in the entire document
const allListItems = document.getElementsByTagName('li');
console.log(allListItems.length);

// Loop through (no forEach on HTMLCollection)
const allImages = document.getElementsByTagName('img');
for (let i = 0; i < allImages.length; i++) {
  console.log(allImages[i].src);
}

// Scoped search — call on a specific element, not document
// HTML: <div id="sidebar"><p>Text 1</p><p>Text 2</p></div>
//       <div id="main-content"><p>Main text</p></div>
const sidebar = document.getElementById('sidebar');
const sidebarParagraphs = sidebar.getElementsByTagName('p');
console.log(sidebarParagraphs.length); // 2 (only sidebar paragraphs)

// Select all elements (wildcard)
const allElements = document.getElementsByTagName('*');
console.log(`Total elements on page: ${allElements.length}`);


/*
═══════════════════════════════════════════════════════════════
7. innerHTML
═══════════════════════════════════════════════════════════════

Reads or writes the HTML content inside an element.
When writing, the browser parses the string as HTML and
renders tags, attributes, and nested elements.

WARNING: Never use innerHTML with user-provided input —
it can execute malicious scripts (XSS attack).
*/

// HTML: <div id="container"><p>Hello <strong>Giorgi</strong></p></div>
const container = document.getElementById('container');

console.log(container.innerHTML); // '<p>Hello <strong>Giorgi</strong></p>'

container.innerHTML = '<h2>Welcome</h2><p>New paragraph.</p>'; // Replaces all
container.innerHTML += '<p>Another paragraph.</p>'; // Appends

// Creating a list dynamically
const menuContainer = document.getElementById('menu');
const dishes = ['Khinkali', 'Khachapuri', 'Lobio', 'Pkhali'];

if (menuContainer) {
  menuContainer.innerHTML = '<h3>Georgian Menu</h3><ul>' +
    dishes.map(dish => `<li>${dish}</li>`).join('') +
    '</ul>';
}

// XSS WARNING — never use innerHTML with user input!
// const userInput = '<img src=x onerror="alert(\'Hacked!\')">';
// container.innerHTML = userInput; // Would execute the script!

// Practical example — building a card from data
const profileCard = document.querySelector('.profile-card');
if (profileCard) {
  const user = { name: 'Ana Lomidze', role: 'Developer', city: 'Batumi' };
  profileCard.innerHTML = `<h3>${user.name}</h3><p>${user.role}</p>`;
}


/*
═══════════════════════════════════════════════════════════════
8. textContent
═══════════════════════════════════════════════════════════════

Reads or writes the plain text content of an element.
Unlike innerHTML, it does NOT parse HTML — tags are treated
as literal text. This makes it safe for displaying user input.
*/

// HTML: <div id="info"><p>Hello <strong>Nino</strong></p></div>
const info = document.getElementById('info');

console.log(info.textContent); // 'Hello Nino' (strips tags)
console.log(info.innerHTML); // '<p>Hello <strong>Nino</strong></p>'

// Writing — tags become visible as plain text, NOT rendered
info.textContent = '<b>Bold text</b>';
// Shows literally: <b>Bold text</b> on screen

// Safe for user input — HTML is escaped automatically
info.textContent = '<script>alert("hacked")</script>';
// Displays the script tag as text, does NOT execute it

// Practical example — score display
const scoreEl = document.getElementById('score');
let currentScore = 0;

const addPoints = function (points) {
  currentScore += points;
  scoreEl.textContent = currentScore;
};

addPoints(10); // scoreEl shows '10'
addPoints(5); // scoreEl shows '15'

// textContent gets ALL nested text combined
// HTML: <div id="article"><h2>Title</h2><p>Paragraph.</p></div>
const article = document.getElementById('article');
console.log(article.textContent); // 'TitleParagraph.'


/*
═══════════════════════════════════════════════════════════════
9. innerHTML vs textContent COMPARISON
═══════════════════════════════════════════════════════════════

Side-by-side comparison to clarify when to use each.
Rule of thumb: use textContent for plain text, innerHTML
only when you need to insert actual HTML markup.
*/

// HTML inside box: <p>Hello <em>Dato</em></p>
const box = document.getElementById('box');

// Reading
console.log(box.innerHTML); // '<p>Hello <em>Dato</em></p>'
console.log(box.textContent); // 'Hello Dato'

// Writing plain text
box.innerHTML = 'Gamarjoba'; // Works, but overkill
box.textContent = 'Gamarjoba'; // Preferred — simpler and faster

// Writing HTML
box.innerHTML = '<strong>Important!</strong>'; // Renders bold text
box.textContent = '<strong>Important!</strong>'; // Shows tags as text

// Security
const dangerousInput = '<img src=x onerror="alert(1)">';
box.innerHTML = dangerousInput; // UNSAFE: executes the script!
box.textContent = dangerousInput; // SAFE: displays as plain text

// Performance: textContent is faster — no HTML parsing needed.

// Practical example — safely rendering user comments
const comments = [
  { author: 'Giorgi', text: 'Great article!' },
  { author: 'Dato', text: '<script>alert("xss")</script>' },
];

const commentList = document.getElementById('comments');
if (commentList) {
  commentList.innerHTML = '';
  comments.forEach(function (comment) {
    const li = document.createElement('li');
    li.textContent = `${comment.author}: ${comment.text}`; // XSS-safe
    commentList.appendChild(li);
  });
}


/*
═══════════════════════════════════════════════════════════════
10. style PROPERTY
═══════════════════════════════════════════════════════════════

Every element has a .style property for reading/writing
INLINE styles. CSS property names use camelCase in JavaScript
(background-color → backgroundColor). The .style property
only reads inline styles — use getComputedStyle() to read
styles from CSS classes or stylesheets.
*/

const heading = document.querySelector('h1');

// Setting styles — camelCase for hyphenated CSS properties
heading.style.color = 'white';
heading.style.backgroundColor = '#2d3436';
heading.style.padding = '20px';
heading.style.borderRadius = '8px';
heading.style.fontSize = '2rem';

// Reading inline styles
console.log(heading.style.color); // 'white'
console.log(heading.style.margin); // '' (not set inline — empty string)

// Setting multiple styles at once with cssText
const banner = document.querySelector('.banner');
if (banner) {
  banner.style.cssText = 'color: white; padding: 40px; text-align: center;';
}

// Removing an inline style — set to empty string
heading.style.backgroundColor = '';

// getComputedStyle() — reads FINAL computed values including stylesheets
const computedStyles = getComputedStyle(heading);
console.log(computedStyles.fontSize); // e.g. '32px'
console.log(computedStyles.display); // e.g. 'block'

// Practical example — highlight function
const highlightElement = function (element) {
  element.style.backgroundColor = '#ffeaa7';
  element.style.border = '2px solid #fdcb6e';
};

const removeHighlight = function (element) {
  element.style.backgroundColor = '';
  element.style.border = '';
};

// Practical example — theme toggle
const applyDarkTheme = function () {
  document.body.style.backgroundColor = '#1e272e';
  document.body.style.color = '#d2dae2';
};


/*
═══════════════════════════════════════════════════════════════
11. SELECTOR METHODS COMPARISON TABLE
═══════════════════════════════════════════════════════════════

  Method                    | Returns           | Live? | CSS Selectors?
  ————————————————————————  | ————————————————  | ————— | —————————————
  getElementById('id')      | Element or null   | N/A   | No (ID only)
  querySelector('.css')     | Element or null   | N/A   | Yes (any CSS)
  querySelectorAll('.css')  | NodeList          | No    | Yes (any CSS)
  getElementsByClassName()  | HTMLCollection    | Yes   | No (class only)
  getElementsByTagName()    | HTMLCollection    | Yes   | No (tag only)

  - querySelector/All: any CSS selector; getElementsBy*: class or tag only
  - Live collections auto-update; static NodeLists are frozen
  - NodeList supports forEach; HTMLCollection does NOT
*/

// Same result, different methods
const byId = document.getElementById('main-title');
const byQuery = document.querySelector('#main-title'); // More flexible

const byClass = document.getElementsByClassName('card'); // live HTMLCollection
const byQueryAll = document.querySelectorAll('.card'); // static NodeList

// Iterating — the crucial difference
byQueryAll.forEach(el => console.log(el.textContent)); // Works
Array.from(byClass).forEach(el => console.log(el.textContent)); // Must convert

// --- When to use which ---
const logo = document.getElementById('logo'); // Unique ID, fastest
const activeTab = document.querySelector('.tabs > .tab.active'); // Complex CSS
const allButtons = document.querySelectorAll('button.btn-primary'); // All matches
const liveItems = document.getElementsByClassName('item'); // Live collection

// Practical example — student dashboard using multiple methods
const giorgi = document.getElementById('student-giorgi');
const activeStudent = document.querySelector('.student-card.active');

const allGrades = document.querySelectorAll('.student-card .grade');
allGrades.forEach(function (gradeEl) {
  const score = Number(gradeEl.textContent);
  gradeEl.style.color = score >= 90 ? 'green' : 'orange';
});

const liveCards = document.getElementsByClassName('student-card');
console.log(`Total students: ${liveCards.length}`); // 3


/*
═══════════════════════════════════════════════════════════════
SUMMARY — DOM BASICS
═══════════════════════════════════════════════════════════════

DOM CONCEPT:
- The DOM is a tree representation of HTML in memory
- `document` is the entry point to the DOM
- Nodes include elements, text, comments; elements are a subset

SELECTING ELEMENTS:
- getElementById('id')       → single element by ID
- querySelector('css')       → first match for any CSS selector
- querySelectorAll('css')    → all matches, static NodeList
- getElementsByClassName()   → live HTMLCollection by class
- getElementsByTagName()     → live HTMLCollection by tag

READING/WRITING CONTENT:
- innerHTML  — gets/sets HTML markup (renders tags)
- textContent — gets/sets plain text (escapes tags, safe)
- Use textContent for user input to prevent XSS attacks

INLINE STYLES:
- element.style.propertyName = 'value' (camelCase)
- element.style.cssText = 'full CSS string'
- getComputedStyle(element) — reads final computed styles
- Set to '' (empty string) to remove an inline style

LIVE vs STATIC:
- getElementsBy* return live collections (auto-update)
- querySelectorAll returns a static snapshot (frozen)
- NodeList supports forEach; HTMLCollection does not
*/
