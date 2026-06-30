# თავი 16 — Advanced JS & DOM

## სარჩევი

1. [Nullish Coalescing Operator (??)](#1-nullish-coalescing-operator-)
2. [Optional Chaining (?.)](#2-optional-chaining-)
3. [Sets](#3-sets)
4. [Maps: საფუძვლები](#4-maps-საფუძვლები)
5. [Maps: იტერაცია](#5-maps-იტერაცია)
6. [Event Propagation: Bubbling და Capturing](#6-event-propagation-bubbling-და-capturing)
7. [Event Propagation პრაქტიკაში](#7-event-propagation-პრაქტიკაში)
8. [Lifecycle DOM Events](#8-lifecycle-dom-events)
9. [Efficient Script Loading: defer და async](#9-efficient-script-loading-defer-და-async)

---

## 1. Nullish Coalescing Operator (??)

### პრობლემა

ხშირად გვჭირდება default მნიშვნელობის მინიჭება, როცა ცვლადი `null` ან `undefined`-ია. `||` ოპერატორით ამას ვაკეთებდით, მაგრამ მას პრობლემა აქვს — ის **ყველა falsy** მნიშვნელობას ეპყრობა ერთნაირად:

```js
const count = 0;
const result = count || 10;
console.log(result); // 10 — არასწორი! 0 ლეგიტიმური მნიშვნელობაა
```

`0`, `""` (ცარიელი სტრინგი) და `false` ყველა falsy-ა, მაგრამ ხშირად ეს ვალიდური მნიშვნელობებია.

### გადაწყვეტა: ??

`??` ოპერატორი მხოლოდ `null` და `undefined`-ზე რეაგირებს — **არა** `0`-ზე, `""`-ზე ან `false`-ზე:

```js
const count = 0;
const result = count ?? 10;
console.log(result); // 0 — სწორია!

const name = "";
console.log(name ?? "უცნობი"); // "" — ცარიელი სტრინგი შენარჩუნდა

const value = null;
console.log(value ?? "default"); // "default"

const data = undefined;
console.log(data ?? "default"); // "default"
```

### ?? vs || — შედარება

```js
const a = 0;
const b = "";
const c = false;
const d = null;
const e = undefined;

// || — falsy check (0, "", false, null, undefined)
console.log(a || "default"); // "default"
console.log(b || "default"); // "default"
console.log(c || "default"); // "default"
console.log(d || "default"); // "default"

// ?? — nullish check (მხოლოდ null, undefined)
console.log(a ?? "default"); // 0
console.log(b ?? "default"); // ""
console.log(c ?? "default"); // false
console.log(d ?? "default"); // "default"
```

### როდის გამოვიყენოთ?

- `??` — როცა `0`, `""` ან `false` ვალიდური მნიშვნელობებია
- `||` — როცა ნებისმიერი falsy მნიშვნელობის ნაცვლად default გინდა

### პრაქტიკული მაგალითი

```js
function getUserSettings(settings) {
  const fontSize = settings.fontSize ?? 16;
  const darkMode = settings.darkMode ?? false;
  const volume = settings.volume ?? 50;

  return { fontSize, darkMode, volume };
}

// fontSize: 0 უნდა დარჩეს 0-ად, არა 16-ად
getUserSettings({ fontSize: 0, darkMode: false, volume: 0 });
// { fontSize: 0, darkMode: false, volume: 0 } — სწორია!
```

---

## 2. Optional Chaining (?.)

### პრობლემა

ობიექტის ღრმა თვისებებზე წვდომისას, თუ შუალედური თვისება არ არსებობს, `TypeError` ხდება:

```js
const user = { name: "ბატუ", address: { city: "თბილისი" } };

console.log(user.address.city);     // "თბილისი"
console.log(user.phone.mobile);     // TypeError: Cannot read properties of undefined
```

ძველი გადაწყვეტა მოუხერხებელი იყო:

```js
console.log(user.phone && user.phone.mobile); // undefined — მაგრამ რთული ჩანაწერია
```

### გადაწყვეტა: ?.

`?.` ამოწმებს — თუ მარცხენა მხარე `null` ან `undefined`-ია, `undefined`-ს აბრუნებს `TypeError`-ის ნაცვლად:

```js
console.log(user.phone?.mobile);    // undefined — არა Error!
console.log(user.address?.city);    // "თბილისი"
console.log(user.address?.zip);     // undefined
```

### ჩალაგებული (nested) optional chaining

```js
const company = {
  name: "TechCo",
  departments: {
    engineering: {
      lead: { name: "ანა" },
    },
  },
};

console.log(company.departments?.engineering?.lead?.name); // "ანა"
console.log(company.departments?.marketing?.lead?.name);   // undefined
```

### მეთოდებთან გამოყენება

```js
const user = {
  name: "ბატუ",
  greet() {
    return `გამარჯობა, ${this.name}`;
  },
};

console.log(user.greet?.());       // "გამარჯობა, ბატუ"
console.log(user.farewell?.());    // undefined — მეთოდი არ არსებობს, Error არ ხდება
```

### მასივებთან გამოყენება

```js
const users = [{ name: "ანა" }, { name: "გიორგი" }];

console.log(users[0]?.name);  // "ანა"
console.log(users[5]?.name);  // undefined
console.log(users?.[0]?.name); // "ანა"
```

### ?? და ?. ერთად

ეს ორი ოპერატორი ხშირად ერთად გამოიყენება:

```js
const user = { settings: { theme: null } };

const theme = user.settings?.theme ?? "light";
console.log(theme); // "light" — theme არის null, ამიტომ ?? "light"-ს აბრუნებს
```

---

## 3. Sets

### რა არის Set?

`Set` არის მონაცემთა სტრუქტურა, რომელიც ინახავს **მხოლოდ უნიკალურ** მნიშვნელობებს. დუბლიკატები ავტომატურად იშლება.

```js
const numbersSet = new Set([1, 2, 3, 2, 1, 4]);
console.log(numbersSet); // Set(4) {1, 2, 3, 4}
```

### Set-ის შექმნა

```js
// მასივიდან
const fruits = new Set(["ვაშლი", "მსხალი", "ვაშლი", "ბანანი"]);
console.log(fruits); // Set(3) {"ვაშლი", "მსხალი", "ბანანი"}

// სტრინგიდან — ყოველი სიმბოლო ცალკე ელემენტი
const letters = new Set("hello");
console.log(letters); // Set(4) {"h", "e", "l", "o"}

// ცარიელი
const empty = new Set();
```

### ძირითადი მეთოდები

```js
const colors = new Set(["წითელი", "ლურჯი", "მწვანე"]);

// ზომა
console.log(colors.size); // 3

// შემოწმება — შეიცავს თუ არა
console.log(colors.has("წითელი")); // true
console.log(colors.has("ყვითელი")); // false

// დამატება
colors.add("ყვითელი");
colors.add("წითელი"); // უკვე არსებობს — არაფერი მოხდება
console.log(colors.size); // 4

// წაშლა
colors.delete("ლურჯი");
console.log(colors.size); // 3

// ყველას წაშლა
colors.clear();
console.log(colors.size); // 0
```

### Set-ის იტერაცია

```js
const languages = new Set(["JavaScript", "Python", "Go"]);

// for...of
for (const lang of languages) {
  console.log(lang);
}

// forEach
languages.forEach(function (value) {
  console.log(value);
});
```

### Set → Array კონვერტაცია

```js
const nums = new Set([1, 2, 3]);

// spread ოპერატორით
const arr1 = [...nums];         // [1, 2, 3]

// Array.from-ით
const arr2 = Array.from(nums);  // [1, 2, 3]
```

### პრაქტიკული გამოყენება — დუბლიკატების მოშორება

```js
const orders = ["პიცა", "ბურგერი", "პიცა", "სუშირა", "ბურგერი"];
const uniqueOrders = [...new Set(orders)];
console.log(uniqueOrders); // ["პიცა", "ბურგერი", "სუშირა"]

// რამდენი უნიკალური ელემენტია?
console.log(new Set(orders).size); // 3
```

> **Set vs Array:** Set-ს არ აქვს ინდექსები, ვერ მიიღებ ელემენტს პოზიციით (`set[0]` არ მუშაობს). Set განკუთვნილია უნიკალურობის უზრუნველსაყოფად და `has()` ოპერაცია ძალიან სწრაფია (O(1)), მაშინ როცა `array.includes()` ნელია (O(n)).

---

## 4. Maps: საფუძვლები

### რა არის Map?

`Map` არის key-value წყვილების კოლექცია, სადაც **ნებისმიერი ტიპის** მნიშვნელობა შეიძლება იყოს key (გასაღები).

ობიექტისგან განსხვავებით, სადაც key მხოლოდ string ან Symbol-ია, Map-ში key შეიძლება იყოს ნებისმიერი: რიცხვი, ობიექტი, ფუნქცია, boolean...

```js
const map = new Map();

map.set("name", "ანა");         // string key
map.set(1, "ერთი");             // number key
map.set(true, "ჭეშმარიტი");     // boolean key

console.log(map.get("name")); // "ანა"
console.log(map.get(1));       // "ერთი"
console.log(map.get(true));    // "ჭეშმარიტი"
```

### Map-ის შექმნა

```js
// ცარიელი + set-ით შევსება
const userMap = new Map();
userMap.set("name", "გიორგი");
userMap.set("age", 25);

// მასივებით ინიციალიზაცია
const settings = new Map([
  ["theme", "dark"],
  ["language", "ka"],
  ["fontSize", 16],
]);
```

### ძირითადი მეთოდები

```js
const menu = new Map();
menu.set("პიცა", 15);
menu.set("ბურგერი", 12);
menu.set("სალათი", 8);

// წაკითხვა
console.log(menu.get("პიცა"));    // 15
console.log(menu.get("წვნიანი")); // undefined

// შემოწმება
console.log(menu.has("პიცა"));    // true
console.log(menu.has("წვნიანი")); // false

// ზომა
console.log(menu.size);            // 3

// წაშლა
menu.delete("სალათი");
console.log(menu.size);            // 2

// ყველას წაშლა
menu.clear();
```

### Method Chaining

`set()` აბრუნებს Map-ს, ამიტომ შეგიძლია ჯაჭვით:

```js
const info = new Map()
  .set("name", "ანა")
  .set("age", 30)
  .set("city", "თბილისი");
```

### Map vs Object

| თვისება | Object | Map |
|---------|--------|-----|
| Key-ს ტიპი | მხოლოდ string/Symbol | ნებისმიერი |
| ზომა | `Object.keys(obj).length` | `map.size` |
| იტერაცია | `Object.entries()` | პირდაპირ iterable |
| თანმიმდევრობა | არ არის გარანტირებული | ჩასმის თანმიმდევრობა |
| Performance | ხშირი add/delete-ისას ნელი | ოპტიმიზირებულია |

### DOM ელემენტი როგორც key

```js
const buttonStates = new Map();

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");

buttonStates.set(btn1, { clicks: 0, lastClicked: null });
buttonStates.set(btn2, { clicks: 0, lastClicked: null });

// ელემენტს ვეძებთ პირდაპირ key-ად
console.log(buttonStates.get(btn1)); // { clicks: 0, lastClicked: null }
```

---

## 5. Maps: იტერაცია

### for...of

Map-ის იტერაციისას ყოველი ელემენტი არის `[key, value]` მასივი:

```js
const prices = new Map([
  ["პიცა", 15],
  ["ბურგერი", 12],
  ["სალათი", 8],
]);

for (const [item, price] of prices) {
  console.log(`${item}: ${price}₾`);
}
// პიცა: 15₾
// ბურგერი: 12₾
// სალათი: 8₾
```

### forEach

```js
prices.forEach(function (value, key) {
  console.log(`${key} → ${value}₾`);
});
```

> **ყურადღება:** forEach-ში პირველი არგუმენტი `value`-ა, მეორე — `key`. ეს Array-ის forEach-ის ანალოგიურია, სადაც პირველი element-ია, მეორე index.

### keys(), values(), entries()

```js
const menu = new Map([
  ["პიცა", 15],
  ["ბურგერი", 12],
]);

console.log([...menu.keys()]);    // ["პიცა", "ბურგერი"]
console.log([...menu.values()]);  // [15, 12]
console.log([...menu.entries()]); // [["პიცა", 15], ["ბურგერი", 12]]
```

### Object ↔ Map კონვერტაცია

```js
// Object → Map
const obj = { name: "ანა", age: 25 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"name" => "ანა", "age" => 25}

// Map → Object
const newObj = Object.fromEntries(map);
console.log(newObj); // { name: "ანა", age: 25 }
```

### პრაქტიკული მაგალითი — Quiz აპლიკაცია

```js
const quiz = new Map([
  ["რა არის JavaScript-ის ტიპი?", "dynamic"],
  ["რამდენი primitive ტიპია?", "7"],
  ["რა წელს შეიქმნა JS?", "1995"],
]);

for (const [question, answer] of quiz) {
  const userAnswer = prompt(question);
  if (userAnswer === answer) {
    console.log("სწორია!");
  } else {
    console.log(`არასწორია. პასუხი: ${answer}`);
  }
}
```

---

## 6. Event Propagation: Bubbling და Capturing

### DOM ხის სტრუქტურა (გამოსახულება სლაიდიდან)

```
EventTarget
├── Node
│   ├── Element → HTMLElement → HTMLButtonElement, HTMLDivElement...
│   ├── Text
│   ├── Comment
│   └── Document
└── Window
```

ყველა DOM ელემენტი მემკვიდრეობით იღებს მეთოდებს ზედა კლასებიდან. ამიტომაა, რომ ნებისმიერ ელემენტზე მუშაობს `.addEventListener()` (EventTarget-იდან), `.cloneNode()` (Node-იდან), `.closest()` (Element-იდან) და ა.შ.

### რა ხდება click-ისას?

როცა მომხმარებელი ღილაკზე დააწკაპუნებს, ბრაუზერი **სამ ფაზას** გადის:

```
           CAPTURING PHASE (ჩაღრმავება)
           ─────────────────────────→
Document → <html> → <body> → <section> → <button>
           ←─────────────────────────
           BUBBLING PHASE (აწევა)
```

**1. Capturing Phase (ჩაღრმავება):**
Event მიდის `document`-იდან ქვემოთ — target ელემენტისკენ.

**2. Target Phase:**
Event მიაღწია target ელემენტს (ღილაკს, რომელზეც დააჭირეს).

**3. Bubbling Phase (აწევა):**
Event ბრუნდება ზემოთ — target-იდან `document`-მდე.

### რატომ არის მნიშვნელოვანი?

Bubbling-ის წყალობით, მშობელ ელემენტზე დადებული listener-იც გაეშვება, როცა შვილ ელემენტზე ხდება მოქმედება:

```html
<div id="parent">
  <button id="child">დააჭირე</button>
</div>
```

```js
document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent-ზე click!");
});

document.getElementById("child").addEventListener("click", function () {
  console.log("Child-ზე click!");
});

// ღილაკზე click-ისას:
// "Child-ზე click!"    ← target phase
// "Parent-ზე click!"   ← bubbling phase
```

### e.target vs e.currentTarget

```js
document.getElementById("parent").addEventListener("click", function (e) {
  console.log("target:", e.target);         // სადაც ᲓᲐᲐᲭᲘᲠᲔᲡ (child ან parent)
  console.log("currentTarget:", e.currentTarget); // სადაც LISTENER-ია (parent)
});
```

- `e.target` — ელემენტი, სადაც მოვლენა **წარმოიშვა**
- `e.currentTarget` — ელემენტი, სადაც listener **დარეგისტრირდა** (= `this`)

### Capturing-ის მოსმინება

ნაგულისხმევად `addEventListener` bubbling ფაზაზე ისმენს. Capturing-ისთვის მესამე არგუმენტად `true` უნდა მიეთითოს:

```js
document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Capturing phase!");
  },
  true // ← capturing
);
```

### stopPropagation()

თუ არ გინდა event ზემოთ "აუფრინდეს":

```js
document.getElementById("child").addEventListener("click", function (e) {
  e.stopPropagation(); // event აქ ჩერდება, parent-ის listener არ გაეშვება
  console.log("მხოლოდ child!");
});
```

> **ყურადღება:** `stopPropagation()` იშვიათად უნდა გამოიყენო. უმეტეს შემთხვევაში Event Delegation უკეთესი გადაწყვეტაა.

---

## 7. Event Propagation პრაქტიკაში

### Event Delegation

Bubbling-ის ყველაზე პრაქტიკული გამოყენება — **Event Delegation**: ერთი listener მშობელ ელემენტზე ბევრი შვილის ნაცვლად.

#### ცუდი გზა — ყოველ ელემენტზე listener:

```js
document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Clicked:", this.textContent);
  });
});
```

#### კარგი გზა — Event Delegation:

```js
document.querySelector(".nav").addEventListener("click", function (e) {
  if (!e.target.classList.contains("nav-link")) return;

  e.preventDefault();
  console.log("Clicked:", e.target.textContent);
});
```

#### რატომ არის Delegation უკეთესი?

1. **მეხსიერება** — 1 listener 100-ის ნაცვლად
2. **დინამიური ელემენტები** — ახლად დამატებულ ელემენტებზეც მუშაობს
3. **სისუფთავე** — ერთი ადგილი ყველა ლოგიკისთვის

### closest() — Event Delegation-ის მეგობარი

`closest()` ეძებს უახლოეს მშობელ ელემენტს (ან თავის თავს), რომელიც ემთხვევა სელექტორს:

```js
document.querySelector(".nav").addEventListener("click", function (e) {
  const link = e.target.closest(".nav-link");
  if (!link) return;

  console.log("Link:", link.dataset.page);
});
```

> `closest()` უკეთესია ვიდრე `e.target.classList.contains()`, რადგან მუშაობს მაშინაც, როცა click-ი ლინკის შვილ ელემენტზე ხდება (მაგ. `<span>` ან `<img>` ლინკის შიგნით).

### ტაბების (Tabs) მაგალითი

```js
const tabsContainer = document.querySelector(".tabs-container");
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-btn");
  if (!clicked) return;

  // ყველა ტაბს active წავართვათ
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  // ყველა content დავმალოთ
  contents.forEach(function (content) {
    content.classList.remove("active");
  });

  // დაკლიკებული ტაბი გავააქტიუროთ
  clicked.classList.add("active");

  // შესაბამისი content გამოვაჩინოთ
  document
    .querySelector("#content-" + clicked.dataset.tab)
    .classList.add("active");
});
```

---

## 8. Lifecycle DOM Events

### DOMContentLoaded

იშვება, როცა HTML სრულად დაიპარსა და DOM ხე აიგო. **არ ელოდება** სურათებს, stylesheet-ებს და სხვა რესურსებს.

```js
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("DOM მზადაა!", e);
});
```

**როდის გვჭირდება?** — როცა `<script>` ტეგი `<head>`-შია და DOM ელემენტებზე წვდომა გვინდა. თუ `<script>` `<body>`-ს ბოლოშია (ან `defer`-ით), ეს event ხშირად არ გვჭირდება.

### load

იშვება, როცა **ყველაფერი** ჩაიტვირთა: HTML, CSS, სურათები, ფონტები, iframe-ები.

```js
window.addEventListener("load", function (e) {
  console.log("ყველაფერი ჩატვირთულია!", e);
});
```

**გამოყენება:** loading spinner-ის მოხსნა, სურათზე დამოკიდებული გათვლები.

### beforeunload

იშვება, როცა მომხმარებელი ტოვებს გვერდს (tab-ის დახურვა, ნავიგაცია). შეგიძლია მომხმარებელს დადასტურება სთხოვო:

```js
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  // ბრაუზერი აჩვენებს "Changes you made may not be saved" შეტყობინებას
});
```

> **ყურადღება:** ეს მხოლოდ მაშინ გამოიყენე, როცა მომხმარებელს შენაუნახი ცვლილებები აქვს (ფორმა, ტექსტის რედაქტორი). ყოველ გვერდზე ამის დადება ცუდი UX-ია.

### Timeline

```
1. HTML პარსინგი იწყება
2. <link>, <script> ტეგების ჩატვირთვა
3. DOM ხე მზადაა → DOMContentLoaded
4. სურათები, ფონტები ჩაიტვირთა → load
5. მომხმარებელი ტოვებს გვერდს → beforeunload
```

---

## 9. Efficient Script Loading: defer და async

### პრობლემა

`<script>` ტეგი ნაგულისხმევად **ბლოკავს** HTML-ის პარსინგს:

```html
<head>
  <script src="app.js"></script> <!-- HTML პარსინგი ჩერდება! -->
</head>
```

რა ხდება:
1. ბრაუზერი ხვდება `<script>` ტეგს
2. HTML პარსინგი ჩერდება
3. JS ფაილი ჩამოიტვირთება
4. JS კოდი შესრულდება
5. HTML პარსინგი გრძელდება

**პრობლემა:** მომხმარებელი ხედავს ცარიელ გვერდს, სანამ JS ჩაიტვირთება.

### გადაწყვეტა 1: body-ს ბოლოში

```html
<body>
  <!-- ყველა HTML -->
  <script src="app.js"></script>
</body>
```

HTML ჯერ სრულად იპარსება, შემდეგ JS ჩაიტვირთება. მუშაობს, მაგრამ JS-ის ჩატვირთვა იწყება მხოლოდ HTML-ის დასრულების შემდეგ.

### გადაწყვეტა 2: defer

```html
<head>
  <script defer src="app.js"></script>
</head>
```

```
HTML:    ████████████████████████████████████
JS:          ⬇️ ჩამოტვირთვა ⬇️
                                    ▶️ შესრულება
                                    ↑ DOMContentLoaded
```

- JS ჩამოიტვირთება **პარალელურად** HTML პარსინგთან
- JS შესრულდება **HTML პარსინგის დასრულების შემდეგ**
- შესრულების თანმიმდევრობა **დაცულია** (script1 → script2 → script3)
- `DOMContentLoaded` ელოდება defer სკრიპტების შესრულებას

### გადაწყვეტა 3: async

```html
<head>
  <script async src="analytics.js"></script>
</head>
```

```
HTML:    ██████████      █████████████████
JS:          ⬇️ ჩამოტვ. ⬇️
                         ▶️ შესრულება (HTML ჩერდება!)
```

- JS ჩამოიტვირთება **პარალელურად** HTML პარსინგთან
- JS შესრულდება **ჩამოტვირთვისთანავე** (HTML პარსინგი ჩერდება!)
- თანმიმდევრობა **არ არის** გარანტირებული
- `DOMContentLoaded` არ ელოდება async სკრიპტებს

### defer vs async — შედარება

| | defer | async |
|---|-------|-------|
| ჩამოტვირთვა | პარალელურად | პარალელურად |
| შესრულება | HTML-ის შემდეგ | ჩამოტვირთვისთანავე |
| თანმიმდევრობა | დაცულია | არ არის გარანტირებული |
| DOMContentLoaded | ელოდება | არ ელოდება |
| გამოყენება | ჩვეულებრივი სკრიპტები | დამოუკიდებელი სკრიპტები |

### რომელი როდის გამოვიყენოთ?

```html
<!-- defer — ძირითადი აპლიკაციის კოდი -->
<script defer src="app.js"></script>
<script defer src="utils.js"></script>

<!-- async — დამოუკიდებელი, თანმიმდევრობა არ აინტერესებს -->
<script async src="analytics.js"></script>
<script async src="ads.js"></script>
```

### type="module" — ავტომატური defer

```html
<script type="module" src="app.js"></script>
```

ES მოდულები (`type="module"`) ავტომატურად `defer`-ის მსგავსად იქცევიან — HTML პარსინგის პარალელურად ჩამოიტვირთებიან და შესრულდებიან HTML-ის დასრულების შემდეგ.

### რეკომენდაცია

ყოველთვის გამოიყენე `defer` (ან `type="module"`) და `<script>` ტეგი `<head>`-ში მოათავსე. ეს საუკეთესო კომბინაციაა performance-ისა და სისწორისთვის.
