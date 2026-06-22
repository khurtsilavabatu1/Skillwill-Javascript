'use strict';

////////////////////////////////////
// DOM Manipulation
// Practice Challenges - With Solutions
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - DOM List Builder
// (createElement, appendChild)

/*
You are building a utility that dynamically generates HTML lists from data.
This is a very common task in real applications — rendering arrays of data
as DOM elements. Your goal is to build a reusable function that takes any
array of strings and produces a complete unordered list element.

1. Create a function 'createList' that takes an array of strings.
2. Inside the function, create a <ul> element using document.createElement.
3. Loop through the array, and for each string:
   a) Create an <li> element
   b) Set its textContent to the current string
   c) Append the <li> to the <ul> using appendChild
4. Return the completed <ul> element.
5. Call createList with the test data and append the result to document.body.
6. Log the outerHTML of the returned <ul> to verify its structure.

TEST DATA: ['Tbilisi', 'Batumi', 'Kutaisi', 'Rustavi', 'Zugdidi']

HINT: document.createElement('ul') creates a <ul> element
HINT: element.textContent = 'text' sets the text inside an element
HINT: parent.appendChild(child) adds a child element to the parent
HINT: element.outerHTML returns the full HTML string of an element

GOOD LUCK 😀
*/

// const createList = function (items) {
//   const ul = document.createElement('ul');
//
//   for (let i = 0; i < items.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = items[i];
//     ul.appendChild(li);
//   }
//
//   return ul;
// };
//
// const cities = ['Tbilisi', 'Batumi', 'Kutaisi', 'Rustavi', 'Zugdidi'];
// const cityList = createList(cities);
// document.body.appendChild(cityList);
//
// console.log('--- DOM List Builder ---');
// console.log('Generated HTML:', cityList.outerHTML);
// // <ul><li>Tbilisi</li><li>Batumi</li><li>Kutaisi</li><li>Rustavi</li><li>Zugdidi</li></ul>
// console.log('Number of <li> children:', cityList.children.length); // 5


////////////////////////////////////
// Practice Challenge #2 - Card Generator
// (createElement, classList, style, appendChild)

/*
You are building a dashboard that displays content cards. Each card has a
title, description, and category. Your task is to create a function that
generates a styled card element from a data object. This demonstrates
how to combine createElement with classList and inline styles to build
rich UI components programmatically.

1. Create a function 'createCard' that takes an object with properties:
   { title, description, category }.
2. Inside the function:
   a) Create a <div> element for the card
   b) Add the class 'card' to it using classList.add
   c) Add a second class based on the category: 'card--' + category
      (e.g., 'card--tech', 'card--science')
   d) Set these inline styles: padding '20px', marginBottom '12px',
      borderRadius '8px', boxShadow '0 2px 8px rgba(0,0,0,0.1)'
   e) Create an <h3> element, set its textContent to the title
   f) Create a <p> element, set its textContent to the description
   g) Create a <span> element, set its textContent to the category,
      and style it with: fontSize '12px', color '#fff',
      backgroundColor '#3949ab', padding '4px 8px',
      borderRadius '4px'
   h) Append h3, p, and span to the card div in that order
3. Return the card element.
4. Create 3 cards from the test data and append each to document.body.
5. Log the classList and outerHTML of each created card.

TEST DATA:
  { title: 'JavaScript Closures', description: 'Understanding scope and closures in JS.', category: 'tech' }
  { title: 'Mars Exploration', description: 'NASA plans for Mars missions in 2030.', category: 'science' }
  { title: 'Modern Art Trends', description: 'How digital art is reshaping galleries.', category: 'art' }

HINT: classList.add('card', 'card--tech') adds multiple classes at once
HINT: You can chain style assignments: el.style.padding = '20px'
HINT: createElement works for any valid HTML tag: 'h3', 'p', 'span', etc.

GOOD LUCK 😀
*/

// const createCard = function (data) {
//   const card = document.createElement('div');
//   card.classList.add('card', `card--${data.category}`);
//
//   card.style.padding = '20px';
//   card.style.marginBottom = '12px';
//   card.style.borderRadius = '8px';
//   card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
//
//   const heading = document.createElement('h3');
//   heading.textContent = data.title;
//
//   const desc = document.createElement('p');
//   desc.textContent = data.description;
//
//   const badge = document.createElement('span');
//   badge.textContent = data.category;
//   badge.style.fontSize = '12px';
//   badge.style.color = '#fff';
//   badge.style.backgroundColor = '#3949ab';
//   badge.style.padding = '4px 8px';
//   badge.style.borderRadius = '4px';
//
//   card.appendChild(heading);
//   card.appendChild(desc);
//   card.appendChild(badge);
//
//   return card;
// };
//
// const cardsData = [
//   { title: 'JavaScript Closures', description: 'Understanding scope and closures in JS.', category: 'tech' },
//   { title: 'Mars Exploration', description: 'NASA plans for Mars missions in 2030.', category: 'science' },
//   { title: 'Modern Art Trends', description: 'How digital art is reshaping galleries.', category: 'art' },
// ];
//
// console.log('--- Card Generator ---');
// for (let i = 0; i < cardsData.length; i++) {
//   const card = createCard(cardsData[i]);
//   document.body.appendChild(card);
//   console.log(`Card ${i + 1} classes:`, card.classList.toString());
//   // Card 1 classes: card card--tech
//   // Card 2 classes: card card--science
//   // Card 3 classes: card card--art
// }


////////////////////////////////////
// Practice Challenge #3 - Element Mover
// (appendChild, insertBefore)

/*
You are building a task management interface with two lists: a source list
and a destination list. Users need to move items between lists. This
challenge demonstrates a critical DOM concept — appendChild MOVES an
element if it already exists in the DOM, rather than copying it. You will
also use insertBefore to control where elements are placed.

1. Create two <ul> elements: 'sourceList' and 'destList'. Give each
   an id ('source-list' and 'dest-list') for easy identification.
2. Populate sourceList with 4 <li> items using a loop:
   ['Buy groceries', 'Clean house', 'Write report', 'Call dentist']
3. Append both lists to document.body.
4. Create a function 'moveItem' that takes a source <ul>, a destination <ul>,
   and an index. It should:
   a) Get the child element at the given index from source.children
   b) If it exists, use destination.appendChild(child) to move it
   c) Log which item was moved and the new child counts of both lists
   d) If the index is invalid, log "No item at index <index>"
5. Create a function 'moveToTop' that takes a destination <ul> and a child
   element, and uses insertBefore to place it before the first child
   of the destination list.
6. Test: move index 0 from source to dest (observe it DISAPPEARS from source),
   then move index 0 again, then use moveToTop to place the next item
   at the top of the destination list.

TEST DATA: ['Buy groceries', 'Clean house', 'Write report', 'Call dentist']

HINT: appendChild on an existing DOM element MOVES it (does not copy)
HINT: parent.children[index] accesses child elements by index
HINT: parent.insertBefore(newChild, referenceChild) inserts before the reference
HINT: parent.firstElementChild returns the first child element (or null)

GOOD LUCK 😀
*/

// const sourceList = document.createElement('ul');
// sourceList.id = 'source-list';
// const destList = document.createElement('ul');
// destList.id = 'dest-list';
//
// const tasks = ['Buy groceries', 'Clean house', 'Write report', 'Call dentist'];
// for (let i = 0; i < tasks.length; i++) {
//   const li = document.createElement('li');
//   li.textContent = tasks[i];
//   sourceList.appendChild(li);
// }
//
// document.body.appendChild(sourceList);
// document.body.appendChild(destList);
//
// console.log('--- Element Mover ---');
// console.log('Source items:', sourceList.children.length); // 4
// console.log('Dest items:', destList.children.length);     // 0
//
// const moveItem = function (source, dest, index) {
//   const child = source.children[index];
//   if (!child) {
//     console.log(`No item at index ${index}`);
//     return;
//   }
//   const text = child.textContent;
//   dest.appendChild(child);
//   console.log(`Moved: "${text}"`);
//   console.log(`Source count: ${source.children.length}, Dest count: ${dest.children.length}`);
// };
//
// const moveToTop = function (dest, child) {
//   const first = dest.firstElementChild;
//   if (first) {
//     dest.insertBefore(child, first);
//   } else {
//     dest.appendChild(child);
//   }
//   console.log(`Moved "${child.textContent}" to top of list`);
// };
//
// moveItem(sourceList, destList, 0);
// // Moved: "Buy groceries"
// // Source count: 3, Dest count: 1
//
// moveItem(sourceList, destList, 0);
// // Moved: "Clean house"
// // Source count: 2, Dest count: 2
//
// // Move "Write report" to the TOP of dest list
// const itemToMove = sourceList.children[0];
// moveToTop(destList, itemToMove);
// // Moved "Write report" to top of list
//
// console.log('---');
// console.log('Final source count:', sourceList.children.length); // 1
// console.log('Final dest count:', destList.children.length);     // 3


////////////////////////////////////
// Practice Challenge #4 - Dynamic Table Builder
// (createElement, appendChild, DocumentFragment)

/*
You are building a grade reporting system that generates HTML tables from
structured data. This challenge teaches you how to construct complex nested
DOM structures (table > thead > tr > th, table > tbody > tr > td) and
introduces DocumentFragment for batch-inserting multiple rows efficiently.
DocumentFragment is a lightweight container that avoids repeated reflows.

1. Create a function 'createTable' that takes two arguments:
   - headers: an array of strings (column names)
   - data: a 2D array (array of row arrays)
2. Inside the function:
   a) Create a <table> element
   b) Create a <thead> element with a single <tr>
   c) Loop through headers, create <th> for each, set textContent, append to the row
   d) Append the row to <thead>, append <thead> to <table>
   e) Create a <tbody> element
   f) Create a DocumentFragment
   g) Loop through data rows: for each row, create a <tr>,
      then for each cell value create a <td>, set textContent, append to the row.
      Append each completed <tr> to the DocumentFragment.
   h) Append the DocumentFragment to <tbody>
   i) Append <tbody> to <table>
3. Return the <table> element.
4. Style the table: border '1px solid #ccc', borderCollapse 'collapse',
   width '100%'. Style each th/td after creation with
   padding '8px 12px', border '1px solid #ddd', textAlign 'left'.
5. Call createTable with the test data and append to document.body.
6. Log the number of rows and columns in the generated table.

TEST DATA:
  Headers: ['Name', 'Subject', 'Grade', 'Status']
  Data:
    ['Giorgi Beridze', 'Mathematics', '95', 'Passed']
    ['Nino Gelashvili', 'Physics', '82', 'Passed']
    ['Luka Tsiklauri', 'Chemistry', '58', 'Failed']
    ['Mariam Janelidze', 'Biology', '91', 'Passed']
    ['Davit Kvaratskhelia', 'History', '74', 'Passed']

HINT: document.createDocumentFragment() creates a lightweight container
HINT: Appending a fragment to the DOM moves all its children at once
HINT: table.getElementsByTagName('tr').length counts all rows (including header)
HINT: Nested loops: outer for rows, inner for cells within each row

GOOD LUCK 😀
*/

// const createTable = function (headers, data) {
//   const table = document.createElement('table');
//   table.style.border = '1px solid #ccc';
//   table.style.borderCollapse = 'collapse';
//   table.style.width = '100%';
//
//   // Build thead
//   const thead = document.createElement('thead');
//   const headerRow = document.createElement('tr');
//   for (let i = 0; i < headers.length; i++) {
//     const th = document.createElement('th');
//     th.textContent = headers[i];
//     th.style.padding = '8px 12px';
//     th.style.border = '1px solid #ddd';
//     th.style.textAlign = 'left';
//     th.style.backgroundColor = '#3949ab';
//     th.style.color = '#fff';
//     headerRow.appendChild(th);
//   }
//   thead.appendChild(headerRow);
//   table.appendChild(thead);
//
//   // Build tbody using DocumentFragment
//   const tbody = document.createElement('tbody');
//   const fragment = document.createDocumentFragment();
//
//   for (let i = 0; i < data.length; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 0; j < data[i].length; j++) {
//       const td = document.createElement('td');
//       td.textContent = data[i][j];
//       td.style.padding = '8px 12px';
//       td.style.border = '1px solid #ddd';
//       td.style.textAlign = 'left';
//       tr.appendChild(td);
//     }
//     fragment.appendChild(tr);
//   }
//
//   tbody.appendChild(fragment);
//   table.appendChild(tbody);
//
//   return table;
// };
//
// const headers = ['Name', 'Subject', 'Grade', 'Status'];
// const studentData = [
//   ['Giorgi Beridze', 'Mathematics', '95', 'Passed'],
//   ['Nino Gelashvili', 'Physics', '82', 'Passed'],
//   ['Luka Tsiklauri', 'Chemistry', '58', 'Failed'],
//   ['Mariam Janelidze', 'Biology', '91', 'Passed'],
//   ['Davit Kvaratskhelia', 'History', '74', 'Passed'],
// ];
//
// const table = createTable(headers, studentData);
// document.body.appendChild(table);
//
// console.log('--- Dynamic Table Builder ---');
// const allRows = table.getElementsByTagName('tr');
// const allCols = table.getElementsByTagName('th');
// console.log('Total rows (including header):', allRows.length); // 6
// console.log('Number of columns:', allCols.length);             // 4
// console.log('Data rows:', allRows.length - 1);                 // 5


////////////////////////////////////
// Practice Challenge #5 - BONUS: Mini Component Factory
// (All methods combined)

/*
You are building a mini UI framework. The idea is to create a single
factory function that accepts a configuration object and returns a fully
constructed DOM element. This pattern is used in real component libraries.
The factory should support multiple component types, each producing a
different HTML structure with appropriate classes and event listeners.

1. Create a function 'createComponent' that takes a config object.
   The config has: { type, text, variant, onClick }.
2. Support three component types:
   a) type: 'button'
      - Create a <button> element
      - Add class 'btn' and 'btn--' + variant (e.g., 'btn--primary')
      - Set textContent to config.text
      - Style: padding '10px 20px', border 'none', borderRadius '6px',
        cursor 'pointer', fontSize '14px'
      - If variant is 'primary': backgroundColor '#3949ab', color '#fff'
      - If variant is 'danger': backgroundColor '#c62828', color '#fff'
      - If variant is 'outline': backgroundColor 'transparent',
        border '2px solid #3949ab', color '#3949ab'
      - If onClick is provided, add a click event listener
   b) type: 'card'
      - Create a <div> with class 'component-card'
      - config has additional properties: title, description
      - Create <h3> for title and <p> for description inside the div
      - Style the div: padding '16px', border '1px solid #e0e0e0',
        borderRadius '8px', marginBottom '12px'
   c) type: 'alert'
      - Create a <div> with class 'alert' and 'alert--' + variant
      - config has additional property: message
      - Set textContent to config.message
      - Create a close <button> (text 'X') inside the alert
      - The close button's click listener should set the alert's
        style.display to 'none'
      - Style the alert: padding '12px 16px', borderRadius '6px',
        marginBottom '8px', display 'flex', justifyContent 'space-between',
        alignItems 'center'
      - If variant is 'success': backgroundColor '#e8f5e9', color '#2e7d32'
      - If variant is 'error': backgroundColor '#ffebee', color '#c62828'
      - If variant is 'info': backgroundColor '#e3f2fd', color '#1565c0'
3. If the type is not recognized, log "Unknown component type: <type>"
   and return null.
4. Create one component of each type and append to document.body.
5. Log each component's outerHTML and classList.

TEST DATA:
  Button: { type: 'button', text: 'Save Changes', variant: 'primary', onClick: function () { console.log('Saved!'); } }
  Card: { type: 'card', title: 'Welcome', description: 'This is your dashboard.', variant: 'default' }
  Alert: { type: 'alert', message: 'Operation completed successfully!', variant: 'success' }

HINT: Use if/else or switch to handle different component types
HINT: element.addEventListener('click', handler) attaches a click listener
HINT: The close button for alert needs its own separate event listener
HINT: You can nest createElement and appendChild calls for complex structures

GOOD LUCK 😀
*/

// const createComponent = function (config) {
//   if (config.type === 'button') {
//     const btn = document.createElement('button');
//     btn.classList.add('btn', `btn--${config.variant}`);
//     btn.textContent = config.text;
//
//     btn.style.padding = '10px 20px';
//     btn.style.border = 'none';
//     btn.style.borderRadius = '6px';
//     btn.style.cursor = 'pointer';
//     btn.style.fontSize = '14px';
//
//     if (config.variant === 'primary') {
//       btn.style.backgroundColor = '#3949ab';
//       btn.style.color = '#fff';
//     } else if (config.variant === 'danger') {
//       btn.style.backgroundColor = '#c62828';
//       btn.style.color = '#fff';
//     } else if (config.variant === 'outline') {
//       btn.style.backgroundColor = 'transparent';
//       btn.style.border = '2px solid #3949ab';
//       btn.style.color = '#3949ab';
//     }
//
//     if (config.onClick) {
//       btn.addEventListener('click', config.onClick);
//     }
//
//     return btn;
//
//   } else if (config.type === 'card') {
//     const card = document.createElement('div');
//     card.classList.add('component-card');
//
//     card.style.padding = '16px';
//     card.style.border = '1px solid #e0e0e0';
//     card.style.borderRadius = '8px';
//     card.style.marginBottom = '12px';
//
//     const heading = document.createElement('h3');
//     heading.textContent = config.title;
//
//     const desc = document.createElement('p');
//     desc.textContent = config.description;
//
//     card.appendChild(heading);
//     card.appendChild(desc);
//
//     return card;
//
//   } else if (config.type === 'alert') {
//     const alert = document.createElement('div');
//     alert.classList.add('alert', `alert--${config.variant}`);
//
//     alert.style.padding = '12px 16px';
//     alert.style.borderRadius = '6px';
//     alert.style.marginBottom = '8px';
//     alert.style.display = 'flex';
//     alert.style.justifyContent = 'space-between';
//     alert.style.alignItems = 'center';
//
//     if (config.variant === 'success') {
//       alert.style.backgroundColor = '#e8f5e9';
//       alert.style.color = '#2e7d32';
//     } else if (config.variant === 'error') {
//       alert.style.backgroundColor = '#ffebee';
//       alert.style.color = '#c62828';
//     } else if (config.variant === 'info') {
//       alert.style.backgroundColor = '#e3f2fd';
//       alert.style.color = '#1565c0';
//     }
//
//     const msgSpan = document.createElement('span');
//     msgSpan.textContent = config.message;
//
//     const closeBtn = document.createElement('button');
//     closeBtn.textContent = 'X';
//     closeBtn.style.border = 'none';
//     closeBtn.style.background = 'transparent';
//     closeBtn.style.cursor = 'pointer';
//     closeBtn.style.fontSize = '16px';
//     closeBtn.style.fontWeight = 'bold';
//     closeBtn.style.color = 'inherit';
//     closeBtn.addEventListener('click', function () {
//       alert.style.display = 'none';
//     });
//
//     alert.appendChild(msgSpan);
//     alert.appendChild(closeBtn);
//
//     return alert;
//
//   } else {
//     console.log(`Unknown component type: ${config.type}`);
//     return null;
//   }
// };
//
// console.log('--- Mini Component Factory ---');
//
// const btn = createComponent({
//   type: 'button',
//   text: 'Save Changes',
//   variant: 'primary',
//   onClick: function () { console.log('Saved!'); },
// });
// document.body.appendChild(btn);
// console.log('Button classes:', btn.classList.toString()); // btn btn--primary
//
// const card = createComponent({
//   type: 'card',
//   title: 'Welcome',
//   description: 'This is your dashboard.',
//   variant: 'default',
// });
// document.body.appendChild(card);
// console.log('Card classes:', card.classList.toString()); // component-card
//
// const alertEl = createComponent({
//   type: 'alert',
//   message: 'Operation completed successfully!',
//   variant: 'success',
// });
// document.body.appendChild(alertEl);
// console.log('Alert classes:', alertEl.classList.toString()); // alert alert--success
//
// // Test unknown type
// const unknown = createComponent({ type: 'slider', text: 'test' });
// console.log('Unknown result:', unknown); // null
