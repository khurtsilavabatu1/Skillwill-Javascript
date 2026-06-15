# Callback-ები, ტაიმერები და DOM - სასწავლო რესურსები

თითოეული თემისთვის მოცემულია ბმულები MDN Web Docs-ზე, W3Schools-ზე და JavaScript.info-ზე.

---

## ძირითადი მასალა

### 1. Callback ფუნქციები (Callback Functions)
ფუნქციები როგორც არგუმენტები, higher-order ფუნქციები, ანონიმური callback-ები.

**MDN Web Docs:**
- [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**W3Schools:**
- [JavaScript Callbacks](https://www.w3schools.com/js/js_callback.asp)
- [JavaScript Array Iteration](https://www.w3schools.com/js/js_array_iteration.asp)

**JavaScript.info:**
- [Function expressions](https://javascript.info/function-expressions)

---

### 2. setTimeout (ერთჯერადი დაყოვნება)
setTimeout სინტაქსი, timer ID, clearTimeout, ასინქრონული ქცევა.

**MDN Web Docs:**
- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)

**W3Schools:**
- [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)

**JavaScript.info:**
- [Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)

---

### 3. setInterval და clearInterval
setInterval სინტაქსი, განმეორებადი ტაიმერები, clearInterval, counter-ის პატერნები.

**MDN Web Docs:**
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)

**W3Schools:**
- [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)

**JavaScript.info:**
- [Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)

---

### 4. DOM — კონცეფცია და ხის სტრუქტურა (DOM Tree)
DOM-ის კონცეფცია, ხის სტრუქტურა, კვანძების ტიპები, document ობიექტი.

**MDN Web Docs:**
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

**W3Schools:**
- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [DOM Intro](https://www.w3schools.com/js/js_htmldom.asp)
- [DOM Document](https://www.w3schools.com/js/js_htmldom_document.asp)

**JavaScript.info:**
- [DOM tree](https://javascript.info/dom-nodes)
- [Walking the DOM](https://javascript.info/dom-navigation)

---

### 5. document.getElementById()
ელემენტის მოძებნა ID-ით, textContent, innerHTML, style, classList.

**MDN Web Docs:**
- [Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [Element.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

**W3Schools:**
- [getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
- [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)
- [JavaScript HTML DOM - Changing CSS](https://www.w3schools.com/js/js_htmldom_css.asp)

**JavaScript.info:**
- [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)
- [Styles and classes](https://javascript.info/styles-and-classes)

---

### 6. querySelector და querySelectorAll
CSS სელექტორებით ელემენტების მოძებნა, NodeList, Array.from() კონვერტაცია.

**MDN Web Docs:**
- [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [Document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

**W3Schools:**
- [querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)
- [querySelectorAll()](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

**JavaScript.info:**
- [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)

---

### 7. Event Listeners (მოვლენის მსმენელები)
addEventListener, Event ობიექტი, click/input/mouseover ივენთები, removeEventListener.

**MDN Web Docs:**
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [EventTarget.removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
- [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

**W3Schools:**
- [JavaScript Events](https://www.w3schools.com/js/js_events.asp)
- [JavaScript Event Listener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
- [JavaScript HTML DOM Events](https://www.w3schools.com/js/js_htmldom_events.asp)

**JavaScript.info:**
- [Introduction to browser events](https://javascript.info/introduction-browser-events)
- [Event delegation](https://javascript.info/event-delegation)

---

### 8. ტაიმერები + DOM — კომბინირებული მაგალითები
setInterval + DOM განახლება, countdown ტაიმერი, typewriter ეფექტი, reaction game.

**MDN Web Docs:**
- [Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

**W3Schools:**
- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)

**JavaScript.info:**
- [Modifying the document](https://javascript.info/modifying-document)

---

## დამატებითი რესურსები

- [JavaScript.info - Scheduling](https://javascript.info/settimeout-setinterval) — ტაიმერების დეტალური სახელმძღვანელო
- [JavaScript.info - DOM tree](https://javascript.info/dom-nodes) — DOM-ის სრული სახელმძღვანელო
- [JavaScript.info - Browser events](https://javascript.info/introduction-browser-events) — ივენთების დეტალური სახელმძღვანელო
- [Eloquent JavaScript - Chapter 14: The DOM](https://eloquentjavascript.net/14_dom.html) — DOM-ის დეტალური ახსნა
- [Eloquent JavaScript - Chapter 15: Handling Events](https://eloquentjavascript.net/15_event.html) — ივენთების დეტალური ახსნა
- [freeCodeCamp - JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) — უფასო ინტერაქტიული კურსი
