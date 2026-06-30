"use strict";

// ========================================================
// თავი 17 — ჩელენჯები (პასუხებით)
// ========================================================

// ─────────────────────────────────────────────────────────
// ჩელენჯი 1: addEventListener + removeEventListener
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია setupOneTimeClick, რომელიც იღებს element-ს
// და callback-ს. callback მხოლოდ ერთხელ უნდა გაეშვას,
// შემდეგ listener ავტომატურად წაიშალოს.
// ⚠️ { once: true } არ გამოიყენოთ — ხელით removeEventListener.

function setupOneTimeClick(element, callback) {
  function handler(e) {
    callback(e);
    element.removeEventListener("click", handler);
  }
  element.addEventListener("click", handler);
}

console.log("--- ჩელენჯი 1 ---");
// ტესტი (ბრაუზერში):
// const testBtn = document.createElement("button");
// testBtn.textContent = "დამაჭირე";
// document.body.appendChild(testBtn);
// setupOneTimeClick(testBtn, function() { console.log("მხოლოდ ერთხელ!"); });
console.log("setupOneTimeClick ფუნქცია მზადაა");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 2: Keyboard Event
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია describeKey, რომელიც იღებს KeyboardEvent-ს
// და აბრუნებს სტრინგს ფორმატით: "Key: a | Code: KeyA | Shift: false"

function describeKey(e) {
  return (
    "Key: " + e.key +
    " | Code: " + e.code +
    " | Shift: " + e.shiftKey
  );
}

console.log("\n--- ჩელენჯი 2 ---");
// სიმულაცია (ნამდვილი KeyboardEvent ბრაუზერშია)
var fakeEvent = { key: "a", code: "KeyA", shiftKey: false };
console.log(describeKey(fakeEvent));
// "Key: a | Code: KeyA | Shift: false"

var fakeEvent2 = { key: "A", code: "KeyA", shiftKey: true };
console.log(describeKey(fakeEvent2));
// "Key: A | Code: KeyA | Shift: true"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 3: Dynamic Element Creation — Todo List
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია createTodoItem, რომელიც იღებს ტექსტს
// და აბრუნებს <li> ელემენტს, რომელსაც აქვს:
// - <span> ტექსტით
// - <button> "წაშლა" — რომელიც click-ზე li-ს წაშლის

function createTodoItem(text) {
  var li = document.createElement("li");

  var span = document.createElement("span");
  span.textContent = text;

  var btn = document.createElement("button");
  btn.textContent = "წაშლა";
  btn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btn);
  return li;
}

console.log("\n--- ჩელენჯი 3 ---");
var todo = createTodoItem("სწავლა");
console.log(todo.outerHTML);
// <li><span>სწავლა</span><button>წაშლა</button></li>

// ─────────────────────────────────────────────────────────
// ჩელენჯი 4: classList.toggle — Dark Mode
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია toggleTheme, რომელიც:
// 1. body-ზე "dark" კლასს toggle-ს აკეთებს
// 2. აბრუნებს ახალ მდგომარეობას: "dark" ან "light"

function toggleTheme() {
  document.body.classList.toggle("dark");
  return document.body.classList.contains("dark") ? "dark" : "light";
}

console.log("\n--- ჩელენჯი 4 ---");
console.log(toggleTheme()); // "dark"
console.log(toggleTheme()); // "light"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 5: Style Manipulation
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია applyStyles, რომელიც იღებს element-ს
// და styles ობიექტს, და ყველა სტილს ელემენტზე ადებს.
// მაგ: applyStyles(el, { color: "red", fontSize: "20px" })

function applyStyles(element, styles) {
  for (var prop in styles) {
    element.style[prop] = styles[prop];
  }
}

console.log("\n--- ჩელენჯი 5 ---");
var testDiv = document.createElement("div");
testDiv.textContent = "ტესტი";
applyStyles(testDiv, {
  color: "red",
  fontSize: "20px",
  backgroundColor: "#f0f0f0",
  padding: "10px",
});
console.log(testDiv.style.color); // "red"
console.log(testDiv.style.fontSize); // "20px"
console.log(testDiv.style.backgroundColor); // "rgb(240, 240, 240)"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 6: Promise — setTimeout-ით
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია waitAndReturn, რომელიც იღებს ms და value.
// ms მილიწამის შემდეგ value-ს resolve-ს აკეთებს.

function waitAndReturn(ms, value) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value);
    }, ms);
  });
}

console.log("\n--- ჩელენჯი 6 ---");
waitAndReturn(1000, "გამარჯობა").then(function (result) {
  console.log(result); // "გამარჯობა" (1 წამის შემდეგ)
});

waitAndReturn(500, 42).then(function (result) {
  console.log(result); // 42 (0.5 წამის შემდეგ)
});

// ─────────────────────────────────────────────────────────
// ჩელენჯი 7: Promise Chaining
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია countdownPromise, რომელიც იღებს start რიცხვს
// და ჯაჭვური Promise-ებით 1 წამიანი ინტერვალით ითვლის
// start-იდან 0-მდე. ყოველ ნაბიჯზე console.log-ით ბეჭდავს.
// ბოლოს resolve-ს აკეთებს "დასრულდა!".

function countdownPromise(start) {
  var chain = Promise.resolve();

  for (var i = start; i >= 0; i--) {
    (function (num) {
      chain = chain.then(function () {
        console.log(num);
        return waitAndReturn(1000, num);
      });
    })(i);
  }

  return chain.then(function () {
    return "დასრულდა!";
  });
}

console.log("\n--- ჩელენჯი 7 ---");
// countdownPromise(3).then(function(msg) { console.log(msg); });
// 3 → 2 → 1 → 0 → "დასრულდა!" (4 წამში)
console.log("countdownPromise(3) — გაუშვით კომენტარის მოხსნით");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 8: Promise.all
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია loadAllData, რომელიც იღებს URL-ების მასივს,
// ყველას პარალელურად fetch-ავს და აბრუნებს JSON მონაცემების მასივს.
// თუ ერთიც ვერ ჩაიტვირთა — catch-ში შეცდომის ტექსტი.

function loadAllData(urls) {
  var promises = urls.map(function (url) {
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP " + response.status + " — " + url);
      }
      return response.json();
    });
  });

  return Promise.all(promises);
}

console.log("\n--- ჩელენჯი 8 ---");
loadAllData([
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
])
  .then(function (users) {
    users.forEach(function (u) {
      console.log(u.name + " — " + u.email);
    });
  })
  .catch(function (err) {
    console.log("შეცდომა:", err.message);
  });

// ─────────────────────────────────────────────────────────
// ჩელენჯი 9: fetch GET — მომხმარებლების ძებნა
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია findUserByName, რომელიც:
// 1. ჩატვირთავს ყველა მომხმარებელს JSONPlaceholder-იდან
// 2. მოძებნის მომხმარებელს სახელით (ნაწილობრივი match, case-insensitive)
// 3. აბრუნებს ნაპოვნ მომხმარებელს ან null-ს

function findUserByName(searchName) {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP შეცდომა: " + response.status);
      }
      return response.json();
    })
    .then(function (users) {
      var searchLower = searchName.toLowerCase();
      var found = users.find(function (user) {
        return user.name.toLowerCase().includes(searchLower);
      });
      return found || null;
    });
}

console.log("\n--- ჩელენჯი 9 ---");
findUserByName("lean").then(function (user) {
  if (user) {
    console.log("ნაპოვნია:", user.name, "—", user.email);
  } else {
    console.log("მომხმარებელი ვერ მოიძებნა");
  }
});

findUserByName("არავინ").then(function (user) {
  console.log(user); // null
});

// ─────────────────────────────────────────────────────────
// ჩელენჯი 10: ყველაფერი ერთად — პოსტების რენდერი
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია renderPosts, რომელიც:
// 1. containerId-ით იპოვის კონტეინერ ელემენტს
// 2. "იტვირთება..." აჩვენებს
// 3. fetch-ით ჩატვირთავს პოსტებს (პირველ 5-ს: ?_limit=5)
// 4. თითოეულისთვის შექმნის card (createElement)
// 5. card-ზე click listener — click-ზე console.log("Post #id: title")
// 6. catch-ში შეცდომა აჩვენებს

function renderPosts(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '<div class="loading">იტვირთება...</div>';

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP შეცდომა: " + response.status);
      }
      return response.json();
    })
    .then(function (posts) {
      container.innerHTML = "";

      posts.forEach(function (post) {
        var card = document.createElement("div");
        card.classList.add("user-card");
        card.style.cursor = "pointer";

        var title = document.createElement("h3");
        title.textContent = post.title;

        var body = document.createElement("p");
        body.textContent =
          post.body.length > 80 ? post.body.slice(0, 80) + "..." : post.body;

        card.appendChild(title);
        card.appendChild(body);

        card.addEventListener("click", function () {
          console.log("Post #" + post.id + ": " + post.title);
        });

        container.appendChild(card);
      });
    })
    .catch(function (error) {
      container.innerHTML =
        '<div class="error">შეცდომა: ' + error.message + "</div>";
    });
}

console.log("\n--- ჩელენჯი 10 ---");
// ბრაუზერში: renderPosts("fetch-output");
// ან ნებისმიერ container-ში
console.log("renderPosts ფუნქცია მზადაა — გაუშვით ბრაუზერში");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 11: async/await — ძირითადი
// ─────────────────────────────────────────────────────────
// გადაწერეთ loadUserThen ფუნქცია async/await სინტაქსით.
// try/catch გამოიყენეთ შეცდომის დასაჭერად.

function loadUserThen() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then(function (user) {
      return user.name;
    })
    .catch(function (error) {
      return "შეცდომა: " + error.message;
    });
}

async function loadUserAsync() {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("HTTP " + response.status);
    var user = await response.json();
    return user.name;
  } catch (error) {
    return "შეცდომა: " + error.message;
  }
}

console.log("\n--- ჩელენჯი 11 ---");
loadUserThen().then(function (name) {
  console.log("then/catch:", name);
});
loadUserAsync().then(function (name) {
  console.log("async/await:", name);
});

// ─────────────────────────────────────────────────────────
// ჩელენჯი 12: async/await + Promise.all
// ─────────────────────────────────────────────────────────
// შექმენით async ფუნქცია getUserWithPosts, რომელიც:
// 1. პარალელურად ჩატვირთავს user-ს და მის პოსტებს (Promise.all + await)
// 2. აბრუნებს ობიექტს: { name, email, postCount }

async function getUserWithPosts(userId) {
  try {
    var results = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/" + userId).then(function (r) {
        if (!r.ok) throw new Error("User not found");
        return r.json();
      }),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId).then(function (r) {
        return r.json();
      }),
    ]);

    var user = results[0];
    var posts = results[1];

    return { name: user.name, email: user.email, postCount: posts.length };
  } catch (error) {
    return { name: "უცნობი", email: "—", postCount: 0 };
  }
}

console.log("\n--- ჩელენჯი 12 ---");
getUserWithPosts(1).then(function (info) {
  console.log(info.name + " — " + info.postCount + " პოსტი");
});

// ─────────────────────────────────────────────────────────
// ჩელენჯი 13: POST — ახალი პოსტის შექმნა
// ─────────────────────────────────────────────────────────
// შექმენით async ფუნქცია createPost, რომელიც:
// 1. იღებს title და body პარამეტრებს
// 2. POST მოთხოვნით აგზავნის JSONPlaceholder-ზე
// 3. აბრუნებს შექმნილ პოსტს (ობიექტი id-ით)

async function createPost(title, body) {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, body: body, userId: 1 }),
    });

    if (!response.ok) throw new Error("POST ვერ შესრულდა");
    return await response.json();
  } catch (error) {
    console.log("შეცდომა:", error.message);
    return null;
  }
}

console.log("\n--- ჩელენჯი 13 ---");
createPost("ტესტი", "ეს არის ტესტ პოსტი").then(function (post) {
  if (post) {
    console.log("შეიქმნა! ID:", post.id, "Title:", post.title);
  }
});

// ─────────────────────────────────────────────────────────
// ჩელენჯი 14: PUT + DELETE
// ─────────────────────────────────────────────────────────
// შექმენით ორი async ფუნქცია:
// 1. updatePost(id, newTitle) — PUT მოთხოვნა, აბრუნებს განახლებულ ობიექტს
// 2. deletePost(id) — DELETE მოთხოვნა, აბრუნებს true/false

async function updatePost(id, newTitle) {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, title: newTitle, body: "updated", userId: 1 }),
    });

    if (!response.ok) throw new Error("PUT ვერ შესრულდა");
    return await response.json();
  } catch (error) {
    console.log("PUT შეცდომა:", error.message);
    return null;
  }
}

async function deletePost(id) {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("DELETE ვერ შესრულდა");
    return true;
  } catch (error) {
    console.log("DELETE შეცდომა:", error.message);
    return false;
  }
}

console.log("\n--- ჩელენჯი 14 ---");
updatePost(1, "განახლებული სათაური").then(function (post) {
  if (post) console.log("განახლდა:", post.title);
});

deletePost(1).then(function (success) {
  console.log("წაშლა:", success ? "წარმატებული" : "ვერ მოხერხდა");
});
