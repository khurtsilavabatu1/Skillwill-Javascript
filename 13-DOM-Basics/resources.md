# DOM-ის საფუძვლები - სასწავლო რესურსები

თითოეული თემისთვის მოცემულია ბმულები MDN Web Docs-ზე, W3Schools-ზე და JavaScript.info-ზე.

---

## ძირითადი მასალა

### 1. DOM-ის ცნება და DOM ხე (DOM Introduction, DOM Tree)
რა არის Document Object Model, როგორ წარმოადგენს ბრაუზერი HTML დოკუმენტს ხის სტრუქტურით, კვანძების ტიპები.

**MDN Web Docs:**
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

**W3Schools:**
- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [DOM Nodes](https://www.w3schools.com/js/js_htmldom_nodes.asp)

**JavaScript.info:**
- [DOM tree](https://javascript.info/dom-nodes)

---

### 2. getElementById
ელემენტის მოძებნა უნიკალური id ატრიბუტით, ერთი ელემენტის დაბრუნება ან null.

**MDN Web Docs:**
- [Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

**W3Schools:**
- [document.getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)

**JavaScript.info:**
- [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)

---

### 3. querySelector და querySelectorAll
ელემენტების მოძებნა CSS სელექტორებით, პირველი შესაბამისი ელემენტის ან NodeList-ის დაბრუნება.

**MDN Web Docs:**
- [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [Document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

**W3Schools:**
- [document.querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)
- [document.querySelectorAll()](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

**JavaScript.info:**
- [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)

---

### 4. getElementsByClassName
ელემენტების მოძებნა კლასის სახელით, ცოცხალი HTMLCollection-ის დაბრუნება.

**MDN Web Docs:**
- [Document.getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)

**W3Schools:**
- [document.getElementsByClassName()](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)

**JavaScript.info:**
- [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)

---

### 5. getElementsByTagName
ელემენტების მოძებნა ტეგის სახელით, ცოცხალი HTMLCollection-ის დაბრუნება.

**MDN Web Docs:**
- [Document.getElementsByTagName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)

**W3Schools:**
- [document.getElementsByTagName()](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)

**JavaScript.info:**
- [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)

---

### 6. innerHTML
ელემენტის HTML შიგთავსის წაკითხვა და ჩაწერა, HTML ტეგების ინტერპრეტაცია.

**MDN Web Docs:**
- [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

**W3Schools:**
- [HTML DOM innerHTML Property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

**JavaScript.info:**
- [innerHTML: the contents](https://javascript.info/basic-dom-node-properties#innerhtml-the-contents)

---

### 7. textContent
ელემენტის ტექსტური შიგთავსის წაკითხვა და ჩაწერა, HTML ტეგების იგნორირება.

**MDN Web Docs:**
- [Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

**W3Schools:**
- [HTML DOM textContent Property](https://www.w3schools.com/jsref/prop_node_textcontent.asp)

**JavaScript.info:**
- [textContent: pure text](https://javascript.info/basic-dom-node-properties#textcontent-pure-text)

---

### 8. Element.style (inline styles)
ელემენტის inline სტილების წაკითხვა და შეცვლა JavaScript-ით, camelCase სინტაქსი CSS თვისებებისთვის.

**MDN Web Docs:**
- [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)

**W3Schools:**
- [HTML DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)
- [JavaScript HTML DOM - Changing CSS](https://www.w3schools.com/js/js_htmldom_css.asp)

**JavaScript.info:**
- [Styles and classes](https://javascript.info/styles-and-classes)

---

### 9. getComputedStyle
ელემენტზე რეალურად მოქმედი სტილების წაკითხვა, მათ შორის CSS ფაილებიდან და მემკვიდრეობით მიღებული სტილები.

**MDN Web Docs:**
- [Window.getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

**W3Schools:**
- [Window getComputedStyle()](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp)

**JavaScript.info:**
- [Computed styles: getComputedStyle](https://javascript.info/styles-and-classes#computed-styles-getcomputedstyle)

---

## დამატებითი რესურსები

- [JavaScript.info - Document](https://javascript.info/document) — DOM-ის სრული სახელმძღვანელო
- [Eloquent JavaScript - Chapter 14: The Document Object Model](https://eloquentjavascript.net/14_dom.html) — DOM-ის დეტალური განხილვა
- [freeCodeCamp - JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) — უფასო ინტერაქტიული კურსი
