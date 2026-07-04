# თავი 17 — Events, Promises & Fetch

## სარჩევი

1. [addEventListener და removeEventListener](#1-addeventlistener-და-removeeventlistener)
2. [ხდომილობების (Events) ტიპები DOM-ში](#2-ხდომილობების-events-ტიპები-dom-ში)
3. [გვერდის სტრუქტურისა და სტილის დინამიური შეცვლა](#3-გვერდის-სტრუქტურისა-და-სტილის-დინამიური-შეცვლა)
4. [Promise ობიექტი](#4-promise-ობიექტი)
5. [fetch API — სერვერიდან მონაცემების მოტანა (GET)](#5-fetch-api--სერვერიდან-მონაცემების-მოტანა-get)
6. [then/catch — შეცდომების მართვა](#6-thencatch--შეცდომების-მართვა)
7. [async/await სინტაქსი](#7-asyncawait-სინტაქსი)
8. [POST, PUT, DELETE — სერვერზე მონაცემების გაგზავნა](#8-post-put-delete--სერვერზე-მონაცემების-გაგზავნა)

---

## 1. addEventListener და removeEventListener

### addEventListener — სინტაქსი

`addEventListener` არის მეთოდი, რომელიც ელემენტს ხდომილობის „მსმენელს" (listener) ამატებს.

```js
element.addEventListener(eventType, handlerFunction, options);
```

- **eventType** — სტრინგი: `"click"`, `"keydown"`, `"input"`, `"submit"` და ა.შ.
- **handlerFunction** — ფუნქცია, რომელიც გაეშვება ხდომილობისას
- **options** — არასავალდებულო (ობიექტი ან boolean)

### მარტივი მაგალითი

```js
const btn = document.getElementById("my-btn");

btn.addEventListener("click", function (e) {
  console.log("ღილაკზე დააჭირეს!");
  console.log("Event object:", e);
});
```

### Event ობიექტი (e)

ყველა handler ავტომატურად იღებს **event ობიექტს** პარამეტრად:

```js
btn.addEventListener("click", function (e) {
  console.log(e.type);           // "click"
  console.log(e.target);         // ელემენტი, სადაც click მოხდა
  console.log(e.currentTarget);  // ელემენტი, სადაც listener დამატებულია
  console.log(e.timeStamp);      // დრო (ms)
});
```

### Options — `once`, `capture`

```js
// once: true — listener მხოლოდ ერთხელ გაეშვება, შემდეგ ავტომატურად წაიშლება
btn.addEventListener("click", function () {
  console.log("ეს მხოლოდ ერთხელ გამოჩნდება!");
}, { once: true });

// capture: true — capturing ფაზაში გაეშვება (არა bubbling-ში)
document.body.addEventListener("click", function () {
  console.log("Capturing ფაზა!");
}, { capture: true });
```

### removeEventListener

listener-ის წასაშლელად **იგივე ფუნქცია** უნდა გადავცეთ:

```js
// ✅ სწორი — named function
function handleClick() {
  console.log("Clicked!");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick); // წაიშალა

// ❌ არასწორი — ანონიმური ფუნქცია ვერ წაიშლება
btn.addEventListener("click", function () {
  console.log("Clicked!");
});
btn.removeEventListener("click", function () {
  console.log("Clicked!");
}); // ეს სხვა ფუნქციაა — არაფერი წაიშლება!
```

### პრაქტიკული მაგალითი — მთვლელი

```js
let count = 0;
const counterEl = document.getElementById("counter");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");

function increment() {
  count++;
  counterEl.textContent = count;
}

addBtn.addEventListener("click", function () {
  addBtn.disabled = true;
  removeBtn.disabled = false;
  counterEl.addEventListener("click", increment);
  console.log("Listener დაემატა!");
});

removeBtn.addEventListener("click", function () {
  removeBtn.disabled = true;
  addBtn.disabled = false;
  counterEl.removeEventListener("click", increment);
  console.log("Listener წაიშალა!");
});
```

---

## 2. ხდომილობების (Events) ტიპები DOM-ში

### Mouse Events

| ხდომილობა     | როდის ეშვება                     |
| ------------- | -------------------------------- |
| `click`       | მარცხენა ღილაკით დაჭერისას        |
| `dblclick`    | ორმაგი დაჭერისას                  |
| `mousedown`   | ღილაკის დაჭერის მომენტში          |
| `mouseup`     | ღილაკის გაშვების მომენტში          |
| `mouseover`   | კურსორი ელემენტზე შედის           |
| `mouseout`    | კურსორი ელემენტიდან გადის          |
| `mousemove`   | კურსორი ელემენტზე მოძრაობს        |

```js
const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.background = "#c8e6c9";
});

box.addEventListener("mouseout", function () {
  box.style.background = "#ffcdd2";
});
```

### Keyboard Events

| ხდომილობა  | როდის ეშვება                          |
| ---------- | ------------------------------------- |
| `keydown`  | კლავიში დაეჭირა (იხშირება)             |
| `keyup`    | კლავიში გაუშვა                        |

```js
document.addEventListener("keydown", function (e) {
  console.log("Key:", e.key);         // "a", "Enter", "ArrowUp"
  console.log("Code:", e.code);       // "KeyA", "Enter", "ArrowUp"
  console.log("Ctrl:", e.ctrlKey);    // true/false
  console.log("Shift:", e.shiftKey);
  console.log("Alt:", e.altKey);
});
```

### Form & Input Events

| ხდომილობა  | როდის ეშვება                              |
| ---------- | ----------------------------------------- |
| `input`    | ყოველ სიმბოლოზე (real-time)               |
| `change`   | ველიდან ფოკუსი წავიდა + მნიშვნელობა შეიცვალა |
| `submit`   | ფორმა გაიგზავნა                            |
| `focus`    | ველი აქტიურდა                             |
| `blur`     | ველმა ფოკუსი დაკარგა                       |

```js
const input = document.getElementById("search");

// real-time — ყოველ სიმბოლოზე
input.addEventListener("input", function (e) {
  console.log("მიმდინარე:", e.target.value);
});

// change — ფოკუსის წასვლისას
input.addEventListener("change", function (e) {
  console.log("საბოლოო:", e.target.value);
});

// focus / blur
input.addEventListener("focus", function () {
  input.style.borderColor = "#3949ab";
});

input.addEventListener("blur", function () {
  input.style.borderColor = "#e0e0e0";
});
```

### submit — ფორმის გაგზავნა

```js
const form = document.getElementById("my-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // გვერდის გადატვირთვის თავიდან აცილება
  
  const name = document.getElementById("name-input").value;
  console.log("გაგზავნილი სახელი:", name);
});
```

> **მნიშვნელოვანი:** `e.preventDefault()` აუცილებელია ფორმის `submit` event-ზე, წინააღმდეგ შემთხვევაში გვერდი გადაიტვირთება.

---

## 3. გვერდის სტრუქტურისა და სტილის დინამიური შეცვლა

### classList — კლასების მართვა

```js
const el = document.getElementById("my-element");

el.classList.add("active");         // კლასის დამატება
el.classList.remove("active");      // კლასის წაშლა
el.classList.toggle("active");      // თუ აქვს — წაშლის, თუ არ აქვს — დაამატებს
el.classList.contains("active");    // true/false — აქვს თუ არა

el.classList.add("bold", "large");  // რამდენიმე ერთდროულად
```

### style — inline სტილის შეცვლა

```js
el.style.color = "red";
el.style.backgroundColor = "#f0f0f0";   // camelCase!
el.style.fontSize = "20px";
el.style.border = "2px solid blue";

// სტილის წაშლა
el.style.color = "";
```

> **შენიშვნა:** CSS-ში `background-color` → JS-ში `backgroundColor` (camelCase).

### createElement — ელემენტის შექმნა

```js
// 1. ელემენტის შექმნა
const card = document.createElement("div");
card.classList.add("card");
card.textContent = "ახალი ბარათი";

// 2. DOM-ში დამატება
document.getElementById("container").appendChild(card);

// append — რამდენიმე ელემენტი ან ტექსტი
container.append(card, " — დამატებულია");

// prepend — თავში დამატება
container.prepend(card);
```

### insertAdjacentHTML

სტრინგიდან HTML-ის ჩასმა კონკრეტულ პოზიციაზე:

```js
const list = document.getElementById("list");

list.insertAdjacentHTML("beforeend", '<li class="item">ახალი ელემენტი</li>');
list.insertAdjacentHTML("afterbegin", '<li class="item">თავში</li>');
```

პოზიციები:
- `"beforebegin"` — ელემენტის წინ (გარეთ)
- `"afterbegin"` — ელემენტის შიგნით, თავში
- `"beforeend"` — ელემენტის შიგნით, ბოლოში
- `"afterend"` — ელემენტის შემდეგ (გარეთ)

### ელემენტის წაშლა

```js
const item = document.getElementById("old-item");
item.remove(); // ელემენტი DOM-იდან წაიშლება
```

### textContent vs innerHTML

```js
el.textContent = "უბრალო ტექსტი";           // უსაფრთხო — HTML არ იმუშავებს
el.innerHTML = "<strong>Bold ტექსტი</strong>"; // HTML დამუშავდება

// ⚠️ innerHTML + user input = XSS რისკი!
// ყოველთვის textContent გამოიყენეთ user-ის მონაცემებისთვის
```

### პრაქტიკული მაგალითი — ელემენტების დინამიური დამატება/წაშლა

```js
const addBtn = document.getElementById("add-item-btn");
const inputEl = document.getElementById("item-input");
const listEl = document.getElementById("item-list");

addBtn.addEventListener("click", function () {
  const text = inputEl.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "წაშლა";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  listEl.appendChild(li);
  inputEl.value = "";
});
```

---

## 4. Promise ობიექტი

### პრობლემა — Callback Hell

ასინქრონული ოპერაციები callback-ებით რთულ, წაუკითხავ კოდს ქმნის:

```js
// ❌ Callback Hell
setTimeout(function () {
  console.log("ნაბიჯი 1");
  setTimeout(function () {
    console.log("ნაბიჯი 2");
    setTimeout(function () {
      console.log("ნაბიჯი 3");
    }, 1000);
  }, 1000);
}, 1000);
```

### Promise — რა არის?

**Promise** არის ობიექტი, რომელიც წარმოადგენს ასინქრონული ოპერაციის მომავალ შედეგს.

Promise-ს სამი მდგომარეობა აქვს:
1. **pending** — ჯერ მუშაობს, შედეგი უცნობია
2. **fulfilled** — წარმატებით დასრულდა (resolve)
3. **rejected** — შეცდომით დასრულდა (reject)

```
[pending] ──resolve()──→ [fulfilled] ──.then()──→ შედეგის დამუშავება
    │
    └──reject()───→ [rejected] ───.catch()──→ შეცდომის დამუშავება
```

### Promise-ის შექმნა

```js
const myPromise = new Promise(function (resolve, reject) {
  // ასინქრონული ოპერაცია
  const success = true;

  if (success) {
    resolve("ოპერაცია წარმატებულია!"); // fulfilled
  } else {
    reject("შეცდომა მოხდა!");          // rejected
  }
});
```

### then, catch, finally

```js
myPromise
  .then(function (result) {
    console.log("წარმატება:", result);
  })
  .catch(function (error) {
    console.log("შეცდომა:", error);
  })
  .finally(function () {
    console.log("ეს ყოველთვის გაეშვება");
  });
```

- `.then()` — fulfilled-ისას გაეშვება
- `.catch()` — rejected-ისას გაეშვება
- `.finally()` — ყოველთვის გაეშვება (წარმატებაც, შეცდომაც)

### პრაქტიკული მაგალითი — setTimeout-ით

```js
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(function () {
  console.log("2 წამი გავიდა!");
});
```

### Promise Chaining

`.then()` ახალ Promise-ს აბრუნებს, რაც ჯაჭვური (sequential) ოპერაციების საშუალებას იძლევა:

```js
delay(1000)
  .then(function () {
    console.log("ნაბიჯი 1 — 1 წამის შემდეგ");
    return delay(1000);
  })
  .then(function () {
    console.log("ნაბიჯი 2 — 2 წამის შემდეგ");
    return delay(1000);
  })
  .then(function () {
    console.log("ნაბიჯი 3 — 3 წამის შემდეგ");
  })
  .catch(function (err) {
    console.log("შეცდომა:", err);
  });
```

### Promise.all — პარალელური შესრულება

ელოდება **ყველა** Promise-ის დასრულებას. თუ ერთიც rejected-ია — მთელი rejected-ია.

```js
const p1 = delay(1000).then(function () { return "პირველი"; });
const p2 = delay(2000).then(function () { return "მეორე"; });
const p3 = delay(1500).then(function () { return "მესამე"; });

Promise.all([p1, p2, p3])
  .then(function (results) {
    console.log(results); // ["პირველი", "მეორე", "მესამე"]
    // ყველა 2 წამის შემდეგ (ყველაზე ნელის დრო)
  })
  .catch(function (err) {
    console.log("ერთ-ერთი ვერ შესრულდა:", err);
  });
```

### Promise.race — ყველაზე სწრაფი

აბრუნებს **პირველ** დასრულებულ Promise-ს (fulfilled ან rejected):

```js
Promise.race([
  delay(1000).then(function () { return "ნელი"; }),
  delay(500).then(function () { return "სწრაფი"; }),
  delay(2000).then(function () { return "ძალიან ნელი"; }),
]).then(function (winner) {
  console.log(winner); // "სწრაფი"
});
```

---

## 5. fetch API — სერვერიდან მონაცემების მოტანა (GET)

### რა არის fetch?

`fetch()` არის ბრაუზერის ჩაშენებული ფუნქცია HTTP მოთხოვნების გასაგზავნად. აბრუნებს **Promise**-ს.

### ძირითადი სინტაქსი (GET)

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    console.log(response);        // Response ობიექტი
    console.log(response.ok);     // true (200-299)
    console.log(response.status); // 200
    return response.json();       // JSON → JS ობიექტი (ესეც Promise-ს აბრუნებს!)
  })
  .then(function (data) {
    console.log(data); // მომხმარებლების მასივი
  })
  .catch(function (error) {
    console.log("ქსელის შეცდომა:", error);
  });
```

### Response ობიექტი

`fetch()` აბრუნებს `Response` ობიექტს, რომელსაც აქვს:

| თვისება/მეთოდი    | აღწერა                                |
| ----------------- | ------------------------------------- |
| `response.ok`     | `true` თუ სტატუსი 200-299            |
| `response.status` | HTTP სტატუს კოდი (200, 404, 500...)   |
| `response.json()` | Response body-ს JSON-იდან JS-ში გარდაქმნის (Promise) |
| `response.text()` | Response body-ს ტექსტად აბრუნებს (Promise)  |

### შეცდომების დამუშავება

> **მნიშვნელოვანი:** `fetch` მხოლოდ **ქსელის შეცდომისას** reject-ს აკეთებს. 404 ან 500 reject **არ** არის — `response.ok` ხელით უნდა შევამოწმოთ!

```js
fetch("https://jsonplaceholder.typicode.com/users/999")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP შეცდომა: " + response.status);
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("შეცდომა:", error.message);
  });
```

### პრაქტიკული მაგალითი — მომხმარებლების ჩატვირთვა

```js
function loadUsers() {
  const container = document.getElementById("users-container");
  container.textContent = "იტვირთება...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("სერვერის შეცდომა: " + response.status);
      }
      return response.json();
    })
    .then(function (users) {
      container.innerHTML = "";
      
      users.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add("user-card");
        card.innerHTML =
          "<h3>" + user.name + "</h3>" +
          "<p>Email: " + user.email + "</p>" +
          "<p>ქალაქი: " + user.address.city + "</p>";
        container.appendChild(card);
      });
    })
    .catch(function (error) {
      container.textContent = "შეცდომა: " + error.message;
    });
}

document.getElementById("load-users-btn").addEventListener("click", loadUsers);
```

### პრაქტიკული მაგალითი — კონკრეტული პოსტის ჩატვირთვა

```js
function loadPost(id) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("პოსტი ვერ მოიძებნა");
      }
      return response.json();
    })
    .then(function (post) {
      console.log("სათაური:", post.title);
      console.log("ტექსტი:", post.body);
    })
    .catch(function (error) {
      console.log("შეცდომა:", error.message);
    });
}

loadPost(1);
```

### fetch + Promise.all — რამდენიმე მოთხოვნა ერთდროულად

```js
Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users/1").then(function (r) { return r.json(); }),
  fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(function (r) { return r.json(); }),
])
  .then(function (results) {
    const user = results[0];
    const posts = results[1];
    console.log(user.name + "-ს აქვს " + posts.length + " პოსტი");
  })
  .catch(function (error) {
    console.log("შეცდომა:", error);
  });
```

---

## 6. then/catch — შეცდომების მართვა

### შეცდომების გავრცელება ჯაჭვში

`.catch()` იჭერს შეცდომას ჯაჭვის **ნებისმიერი** წინა `.then()`-იდან:

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("სერვერის შეცდომა: " + response.status);
    }
    return response.json();
  })
  .then(function (users) {
    // თუ აქ შეცდომა მოხდა, catch მაინც დაიჭერს
    console.log(users[0].name);
    return users;
  })
  .catch(function (error) {
    // იჭერს ყველაფერს — fetch-ის, throw-ის, ან runtime შეცდომას
    console.log("შეცდომა:", error.message);
  });
```

### catch შუაში — ჯაჭვის გაგრძელება

`.catch()` ჯაჭვის შუაშიც შეიძლება. თუ catch-მა რაღაც დააბრუნა, ჯაჭვი გაგრძელდება:

```js
fetch("https://jsonplaceholder.typicode.com/users/999")
  .then(function (response) {
    if (!response.ok) throw new Error("ვერ მოიძებნა");
    return response.json();
  })
  .catch(function (error) {
    console.log("შეცდომა:", error.message);
    return []; // ცარიელი მასივი — ჯაჭვი გაგრძელდება
  })
  .then(function (users) {
    console.log("მომხმარებლები:", users.length); // 0
  });
```

### finally — გასუფთავება

`.finally()` ყოველთვის გაეშვება — იდეალურია loading state-ის გასასუფთავებლად:

```js
var loadingEl = document.getElementById("loading");
loadingEl.style.display = "block";

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts.length + " პოსტი");
  })
  .catch(function (error) {
    console.log("შეცდომა:", error.message);
  })
  .finally(function () {
    loadingEl.style.display = "none"; // ყოველთვის გაითიშება
  });
```

### throw vs reject

```js
// ეს ორი ეკვივალენტურია .then()-ის შიგნით:

// 1. throw — catch-ში გადადის
.then(function (response) {
  throw new Error("პრობლემა!");
})

// 2. Promise.reject — იგივე ეფექტი
.then(function (response) {
  return Promise.reject(new Error("პრობლემა!"));
})
```

---

## 7. async/await სინტაქსი

### რა არის async/await?

`async/await` არის Promise-ების მართვის **უფრო წაკითხვადი** სინტაქსი. შიგნით იგივე Promise-ებია, მაგრამ კოდი სინქრონულს ჰგავს.

### async ფუნქცია

`async` keyword ფუნქციის წინ ავტომატურად Promise-ს აბრუნებს:

```js
async function greet() {
  return "გამარჯობა";
}

// იგივეა რაც:
function greet() {
  return Promise.resolve("გამარჯობა");
}

greet().then(function (msg) {
  console.log(msg); // "გამარჯობა"
});
```

### await — Promise-ის შედეგის მოლოდინი

`await` ელოდება Promise-ის დასრულებას და აბრუნებს შედეგს. **მხოლოდ `async` ფუნქციის შიგნით** მუშაობს.

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts.length + " პოსტი");
  })
  .catch(function (error) {
    console.log("შეცდომა:", error.message);
  })
  .finally(function () {
    loadingEl.style.display = "none"; // ყოველთვის გაითიშება
  });
async function loadUser() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let user = await response.json();
  console.log(user.name); // "Leanne Graham"
}

loadUser();
```

### then/catch vs async/await — შედარება

```js
// then/catch ვერსია
function loadUserThen() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      console.log(user.name);
    })
    .catch(function (error) {
      console.log("შეცდომა:", error);
    });
}

// async/await ვერსია — იგივე ლოგიკა, უფრო წაკითხვადი
async function loadUserAsync() {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    var user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.log("შეცდომა:", error);
  }
}
```

### try/catch — შეცდომების დამუშავება

async/await-ში შეცდომებს `try/catch` ბლოკით ვიჭერთ:

```js
async function loadUsers() {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("HTTP შეცდომა: " + response.status);
    }
    
    var users = await response.json();
    console.log(users.length + " მომხმარებელი");
    return users;
  } catch (error) {
    console.log("შეცდომა:", error.message);
    return [];
  }
}
```

### რამდენიმე await თანმიმდევრულად

```js
async function loadUserWithPosts() {
  try {
    var userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    var user = await userResponse.json();

    var postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    var posts = await postsResponse.json();

    console.log(user.name + "-ს აქვს " + posts.length + " პოსტი");
  } catch (error) {
    console.log("შეცდომა:", error);
  }
}
```

### Promise.all + await — პარალელური მოთხოვნები

თანმიმდევრული await ნელია — მოთხოვნები ერთმანეთს ელოდება. `Promise.all`-ით პარალელურად ვაგზავნით:

```js
async function loadParallel() {
  try {
    // ❌ ნელი — მეორე ელოდება პირველს
    // var users = await fetch("...users").then(r => r.json());
    // var posts = await fetch("...posts").then(r => r.json());

    // ✅ სწრაფი — ორივე ერთდროულად იგზავნება
    var results = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(function (r) { return r.json(); }),
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then(function (r) { return r.json(); }),
    ]);

    var users = results[0];
    var posts = results[1];
    console.log(users.length + " მომხმარებელი, " + posts.length + " პოსტი");
  } catch (error) {
    console.log("შეცდომა:", error);
  }
}
```

---

## 8. POST, PUT, DELETE — სერვერზე მონაცემების გაგზავნა

### HTTP მეთოდები

| მეთოდი   | დანიშნულება                    | Body |
| -------- | ------------------------------ | ---- |
| `GET`    | მონაცემების წამოღება            | არა  |
| `POST`   | ახალი მონაცემის შექმნა          | კი   |
| `PUT`    | არსებული მონაცემის სრული განახლება | კი   |
| `DELETE` | მონაცემის წაშლა                 | არა  |

### fetch-ის მეორე არგუმენტი — options

GET-ისთვის options არ სჭირდება. POST/PUT/DELETE-ისთვის **options ობიექტს** გადავცემთ:

```js
fetch(url, {
  method: "POST",                              // HTTP მეთოდი
  headers: {
    "Content-Type": "application/json",        // ვეუბნებით სერვერს: JSON 
  },
  body: JSON.stringify({ title: "ახალი", body: "ტექსტი" }),  // მონაცემები
});
```

### POST — ახალი რესურსის შექმნა

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "ჩემი პოსტი",
    body: "ეს არის ახალი პოსტი",
    userId: 1,
  }),
})
  .then(function (response) {
    if (!response.ok) throw new Error("POST ვერ შესრულდა");
    return response.json();
  })
  .then(function (newPost) {
    console.log("შეიქმნა! ID:", newPost.id); // 101 (JSONPlaceholder-ის შემთხვევაში)
  })
  .catch(function (error) {
    console.log("შეცდომა:", error.message);
  });
```

### POST — async/await ვერსია

```js
async function createPost(title, body) {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, body: body, userId: 1 }),
    });

    if (!response.ok) throw new Error("POST ვერ შესრულდა");

    var newPost = await response.json();
    console.log("შეიქმნა:", newPost);
    return newPost;
  } catch (error) {
    console.log("შეცდომა:", error.message);
  }
}

createPost("სათაური", "ტექსტი");
```

### PUT — რესურსის განახლება

```js
async function updatePost(id, title, body) {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, title: title, body: body, userId: 1 }),
    });

    if (!response.ok) throw new Error("PUT ვერ შესრულდა");

    var updated = await response.json();
    console.log("განახლდა:", updated);
  } catch (error) {
    console.log("შეცდომა:", error.message);
  }
}

updatePost(1, "განახლებული სათაური", "განახლებული ტექსტი");
```

### DELETE — რესურსის წაშლა

```js
async function deletePost(id) {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("DELETE ვერ შესრულდა");

    console.log("პოსტი #" + id + " წაიშალა!");
  } catch (error) {
    console.log("შეცდომა:", error.message);
  }
}

deletePost(1);
```

> **შენიშვნა:** JSONPlaceholder ფაქტობრივად არაფერს არ შლის/ცვლის — ის მხოლოდ **სიმულაციას** აკეთებს და წარმატებულ response-ს აბრუნებს. ეს სწავლისთვის იდეალურია.

### პრაქტიკული მაგალითი — CRUD ოპერაციები DOM-ით

```js
// ახალი პოსტის ფორმა
document.getElementById("post-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  var title = document.getElementById("post-title").value;
  var body = document.getElementById("post-body").value;

  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, body: body, userId: 1 }),
    });

    var newPost = await response.json();

    // DOM-ში დამატება
    var card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = "<h3>" + newPost.title + "</h3><p>" + newPost.body + "</p>";
    document.getElementById("posts-container").prepend(card);

    // ფორმის გასუფთავება
    e.target.reset();
  } catch (error) {
    console.log("შეცდომა:", error);
  }
});
```

---

## შეჯამება

| თემა                    | რა ვისწავლეთ                                                    |
| ----------------------- | --------------------------------------------------------------- |
| addEventListener        | ხდომილობის მსმენელის დამატება + options (once, capture)           |
| removeEventListener     | მსმენელის წაშლა — named function აუცილებელია                      |
| DOM Events              | click, keydown, input, submit, focus/blur, mouseover/mouseout    |
| classList               | add, remove, toggle, contains — კლასების მართვა                 |
| style                   | inline სტილის შეცვლა JS-ით (camelCase)                          |
| createElement           | ელემენტის შექმნა + appendChild/append/prepend                    |
| insertAdjacentHTML      | HTML სტრინგის ჩასმა კონკრეტულ პოზიციაზე                          |
| remove()                | ელემენტის წაშლა DOM-იდან                                         |
| Promise                 | ასინქრონული ოპერაციის ობიექტი — pending/fulfilled/rejected       |
| then/catch/finally      | Promise-ის შედეგის დამუშავება                                    |
| Promise.all             | ყველა Promise-ის პარალელური შესრულება                             |
| Promise.race            | პირველი დასრულებული Promise                                      |
| fetch (GET)             | HTTP მოთხოვნის გაგზავნა — აბრუნებს Promise-ს                     |
| response.json()         | JSON → JS ობიექტი (Promise)                                     |
| response.ok             | სტატუსის შემოწმება (200-299)                                     |
| catch შუაში             | ჯაჭვის გაგრძელება default მნიშვნელობით                            |
| finally                 | ყოველთვის გაეშვება — loading state-ის გასუფთავება                  |
| async/await             | Promise-ების წაკითხვადი სინტაქსი — try/catch შეცდომებისთვის       |
| await Promise.all       | პარალელური async მოთხოვნები                                      |
| POST                    | ახალი რესურსის შექმნა — method + headers + body                   |
| PUT                     | არსებული რესურსის განახლება                                       |
| DELETE                  | რესურსის წაშლა                                                    |
