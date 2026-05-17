# Pig Game პროექტი - სასწავლო რესურსები

თითოეული თემისთვის მოცემულია ბმულები MDN Web Docs-ზე, W3Schools-ზე და JavaScript.info-ზე.

---

## ძირითადი მასალა

### 1. getElementById vs querySelector
DOM ელემენტების მოძებნის ორი მიდგომა — getElementById ID-ით პირდაპირ პოულობს ელემენტს, ხოლო querySelector CSS სელექტორებით ეძებს.

**MDN Web Docs:**
- [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

**W3Schools:**
- [getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
- [querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)

**JavaScript.info:**
- [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)

---

### 2. თამაშის მდგომარეობის მართვა (let ცვლადები, მასივები ქულებისთვის)
თამაშის მდგომარეობის მართვა let ცვლადებით — ქულების მასივი, აქტიური მოთამაშე, თამაშის ფლაგი და მიმდინარე ქულა.

**MDN Web Docs:**
- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [var, let, and const](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

**W3Schools:**
- [JavaScript let](https://www.w3schools.com/js/js_let.asp)
- [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)

**JavaScript.info:**
- [Variables](https://javascript.info/variables)
- [Arrays](https://javascript.info/array)

---

### 3. classList.toggle
CSS კლასის გადართვა — თუ ელემენტს კლასი აქვს, წაშლის; თუ არ აქვს, დაამატებს. Pig Game-ში მოთამაშეების აქტიური/არააქტიური მდგომარეობის გადართვისთვის გამოიყენება.

**MDN Web Docs:**
- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [DOMTokenList.toggle()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)

**W3Schools:**
- [HTML DOM classList Property](https://www.w3schools.com/jsref/prop_element_classlist.asp)
- [HTML DOM toggle() Method](https://www.w3schools.com/howto/howto_js_toggle_class.asp)

**JavaScript.info:**
- [Styles and classes](https://javascript.info/styles-and-classes)

---

### 4. Template Literal-ები DOM სელექტორებში
Template literal-ების გამოყენება დინამიური DOM სელექტორების შესაქმნელად — მაგალითად `#score--${activePlayer}` აქტიური მოთამაშის ქულის ელემენტის მოსაძებნად.

**MDN Web Docs:**
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

**W3Schools:**
- [JavaScript Template Literals](https://www.w3schools.com/js/js_string_templates.asp)
- [querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)

**JavaScript.info:**
- [Strings - Backticks](https://javascript.info/string#backticks)

---

### 5. სურათის src მანიპულირება
სურათის src ატრიბუტის შეცვლა JavaScript-ით — Pig Game-ში კამათლის სურათის დინამიურად განახლება ნაგდები რიცხვის მიხედვით.

**MDN Web Docs:**
- [HTMLImageElement.src](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)
- [Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

**W3Schools:**
- [HTML DOM Image src Property](https://www.w3schools.com/jsref/prop_img_src.asp)
- [HTML DOM setAttribute()](https://www.w3schools.com/jsref/met_element_setattribute.asp)

**JavaScript.info:**
- [Attributes and properties](https://javascript.info/dom-attributes-and-properties)

---

### 6. addEventListener და ივენთ ჰენდლინგი
ივენთ ლისენერების დამატება ელემენტებზე — click ივენთები ღილაკებზე (კამათლის გაგორება, ქულის შენახვა, ახალი თამაში) და სხვა ივენთების მოსმენა.

**MDN Web Docs:**
- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

**W3Schools:**
- [addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
- [onclick Event](https://www.w3schools.com/jsref/event_onclick.asp)

**JavaScript.info:**
- [Introduction to browser events](https://javascript.info/introduction-browser-events)

---

### 7. Math.random() და Math.trunc()
შემთხვევითი რიცხვების გენერირება და მათი მთელ რიცხვებად გარდაქმნა — Pig Game-ში კამათლის 1-6 შემთხვევითი მნიშვნელობის მისაღებად.

**MDN Web Docs:**
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.trunc()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
- [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

**W3Schools:**
- [JavaScript Math.random()](https://www.w3schools.com/js/js_random.asp)
- [JavaScript Math.trunc()](https://www.w3schools.com/jsref/jsref_trunc.asp)

**JavaScript.info:**
- [Numbers](https://javascript.info/number)

---

## დამატებითი რესურსები

- [JavaScript.info - DOM](https://javascript.info/document) - DOM-ის დეტალური სახელმძღვანელო
- [JavaScript.info - Events](https://javascript.info/events) - ივენთების დეტალური სახელმძღვანელო
- [MDN - DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) - DOM-ის მანიპულირების გზამკვლევი
- [freeCodeCamp - JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) - უფასო ინტერაქტიული კურსი
