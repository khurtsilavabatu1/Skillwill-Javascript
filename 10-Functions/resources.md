# ფუნქციების დეტალური განხილვა - სასწავლო რესურსები

თითოეული თემისთვის მოცემულია ბმულები MDN Web Docs-ზე, W3Schools-ზე და JavaScript.info-ზე.

---

## ძირითადი მასალა

### 1. Default Parameters (ნაგულისხმევი პარამეტრები)
ფუნქციის პარამეტრებისთვის ნაგულისხმევი მნიშვნელობების მინიჭება, რომლებიც გამოიყენება არგუმენტის გადაუცემლობის ან undefined-ის შემთხვევაში.

**MDN Web Docs:**
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

**W3Schools:**
- [JavaScript Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)

**JavaScript.info:**
- [Function expressions](https://javascript.info/function-expressions) — ნაგულისხმევი პარამეტრების მაგალითები
- [Functions](https://javascript.info/function-basics#default-values) — Default values სექცია

---

### 2. Passing Arguments: Value vs Reference (არგუმენტების გადაცემა: მნიშვნელობით vs მითითებით)
პრიმიტიული ტიპების მნიშვნელობით გადაცემა და ობიექტების მითითებით გადაცემა ფუნქციებში, გვერდითი ეფექტები.

**MDN Web Docs:**
- [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [Functions — passing arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

**W3Schools:**
- [JavaScript Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)

**JavaScript.info:**
- [Object references and copying](https://javascript.info/object-copy)

---

### 3. First-Class and Higher-Order Functions (პირველი კლასის და მაღალი რიგის ფუნქციები)
ფუნქციები როგორც მნიშვნელობები — ცვლადებში შენახვა, არგუმენტად გადაცემა, ფუნქციიდან დაბრუნება. Higher-order ფუნქციები, რომლებიც სხვა ფუნქციებს იღებენ ან აბრუნებენ.

**MDN Web Docs:**
- [First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

**W3Schools:**
- [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)

**JavaScript.info:**
- [Function expressions](https://javascript.info/function-expressions)

---

### 4. Callback Functions (ქოლბექ ფუნქციები)
ფუნქცია, რომელიც სხვა ფუნქციას არგუმენტად გადაეცემა და მოგვიანებით გამოიძახება. ასინქრონული და სინქრონული ქოლბექები.

**MDN Web Docs:**
- [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

**W3Schools:**
- [JavaScript Callbacks](https://www.w3schools.com/js/js_callback.asp)

**JavaScript.info:**
- [Introduction: callbacks](https://javascript.info/callbacks)

---

### 5. Functions Returning Functions (ფუნქციები, რომლებიც ფუნქციებს აბრუნებენ)
ფუნქცია, რომელიც სხვა ფუნქციას ქმნის და აბრუნებს, ფუნქციების ფაბრიკა, currying-ის საფუძვლები.

**MDN Web Docs:**
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

**W3Schools:**
- [JavaScript Function Closures](https://www.w3schools.com/js/js_function_closures.asp)

**JavaScript.info:**
- [Variable scope, closure](https://javascript.info/closure)
- [Currying](https://javascript.info/currying-partials)

---

### 6. The call Method (call მეთოდი)
ფუნქციის გამოძახება კონკრეტული this კონტექსტით და ცალკეული არგუმენტებით.

**MDN Web Docs:**
- [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

**W3Schools:**
- [JavaScript Function call()](https://www.w3schools.com/js/js_function_call.asp)

**JavaScript.info:**
- [Decorators and forwarding, call/apply](https://javascript.info/call-apply-decorators)

---

### 7. The apply Method (apply მეთოდი)
ფუნქციის გამოძახება კონკრეტული this კონტექსტით და არგუმენტების მასივით.

**MDN Web Docs:**
- [Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

**W3Schools:**
- [JavaScript Function apply()](https://www.w3schools.com/js/js_function_apply.asp)

**JavaScript.info:**
- [Decorators and forwarding, call/apply](https://javascript.info/call-apply-decorators)

---

### 8. The bind Method (bind მეთოდი)
ახალი ფუნქციის შექმნა ფიქსირებული this კონტექსტით და სურვილისამებრ წინასწარ მითითებული არგუმენტებით (partial application).

**MDN Web Docs:**
- [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

**W3Schools:**
- [JavaScript Function bind()](https://www.w3schools.com/js/js_function_bind.asp)

**JavaScript.info:**
- [Function binding](https://javascript.info/bind)

---

### 9. IIFE — Immediately Invoked Function Expressions (დაუყოვნებლივ გამოძახებული ფუნქციის გამოსახულება)
ფუნქციის გამოსახულების განსაზღვრა და მყისიერი გამოძახება, პრივატული scope-ის შექმნა, გლობალური namespace-ის დაცვა.

**MDN Web Docs:**
- [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

**W3Schools:**
- [JavaScript Function Closures](https://www.w3schools.com/js/js_function_closures.asp) — Self-Invoking Functions სექცია

**JavaScript.info:**
- [The old "var"](https://javascript.info/var#iife) — IIFE სექცია

---

### 10. Closures (ჩაკეტვა / კლოჟერები)
ფუნქციის უნარი დაიმახსოვროს და მიწვდეს თავისი ლექსიკური გარემოს ცვლადებს, თუნდაც გარე ფუნქციის შესრულების დასრულების შემდეგ.

**MDN Web Docs:**
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

**W3Schools:**
- [JavaScript Function Closures](https://www.w3schools.com/js/js_function_closures.asp)

**JavaScript.info:**
- [Variable scope, closure](https://javascript.info/closure)

---

## დამატებითი რესურსები

- [JavaScript.info - Advanced working with functions](https://javascript.info/advanced-functions) — ფუნქციების დეტალური სახელმძღვანელო
- [Eloquent JavaScript - Chapter 3: Functions](https://eloquentjavascript.net/03_functions.html) — ფუნქციების სრული განხილვა
- [Eloquent JavaScript - Chapter 5: Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html) — მაღალი რიგის ფუნქციები
- [freeCodeCamp - JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) — უფასო ინტერაქტიული კურსი
