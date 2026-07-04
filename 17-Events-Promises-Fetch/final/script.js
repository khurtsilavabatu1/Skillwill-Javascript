"use strict";

// ========================================================
// თავი 17 — Events, Promises & Fetch
// ========================================================

// ─── 1. addEventListener / removeEventListener ──────────

console.log("--- addEventListener / removeEventListener ---");

let count = 0;
const counterEl = document.getElementById("counter");
const addListenerBtn = document.getElementById("add-listener-btn");
const removeListenerBtn = document.getElementById("remove-listener-btn");

function increment() {
  count++;
  counterEl.textContent = count;
}

addListenerBtn.addEventListener("click", function () {
  counterEl.addEventListener("click", increment);
  counterEl.classList.add("active");
  addListenerBtn.disabled = true;
  removeListenerBtn.disabled = false;
  console.log("Click listener ჩაირთო counter-ზე");
});

removeListenerBtn.addEventListener("click", function () {
  counterEl.removeEventListener("click", increment);
  counterEl.classList.remove("active");
  removeListenerBtn.disabled = true;
  addListenerBtn.disabled = false;
  console.log("Click listener გამოირთო counter-ზე");
});

// once: true — მხოლოდ ერთხელ
counterEl.addEventListener(
  "dblclick",
  function () {
    count = 0;
    counterEl.textContent = count;
    console.log("Counter განულდა! (ეს მხოლოდ ერთხელ იმუშავებს)");
  },
  { once: true },
);

// ─── 2. Keyboard Events ─────────────────────────────────

console.log("\n--- Keyboard Events ---");

const keyValue = document.getElementById("key-value");
const codeValue = document.getElementById("code-value");
const modifierValue = document.getElementById("modifier-value");

document.addEventListener("keydown", function (e) {
  keyValue.textContent = e.key;
  codeValue.textContent = e.code;

  const mods = [];
  if (e.ctrlKey) mods.push("Ctrl");
  if (e.shiftKey) mods.push("Shift");
  if (e.altKey) mods.push("Alt");
  if (e.metaKey) mods.push("Meta");

  modifierValue.textContent = mods.length > 0 ? mods.join(" + ") : "—";

  console.log("Key:", e.key, "| Code:", e.code, "| Modifiers:", mods.join("+"));
});

// ─── 3. Dynamic DOM + Style ─────────────────────────────

console.log("\n--- Dynamic DOM & Style ---");

// Dark mode toggle
const toggleDarkBtn = document.getElementById("toggle-dark");

toggleDarkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  console.log(
    "Dark mode:",
    document.body.classList.contains("dark") ? "ON" : "OFF",
  );
});

// Hover box — mouseover / mouseout
const hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.background = "#c8e6c9";
  hoverBox.textContent = "კურსორი შიგნითაა!";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.background = "#ffcdd2";
  hoverBox.textContent = "მაუსი მოიტანეთ";
});

// Dynamic item list — createElement + remove
const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

addItemBtn.addEventListener("click", function () {
  const text = itemInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "წაშლა";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    console.log("წაიშალა:", text);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  console.log("დაემატა:", text);
  itemInput.value = "";
  itemInput.focus();
});

// Enter-ით დამატება
itemInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItemBtn.click();
  }
});

// ─── 4. Promise ─────────────────────────────────────────

console.log("\n--- Promise ---");

function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

const promiseOutput = document.getElementById("promise-output");
const promiseBtn = document.getElementById("promise-btn");
const promiseAllBtn = document.getElementById("promise-all-btn");

function appendLine(text) {
  const line = document.createElement("div");
  line.textContent = text;
  promiseOutput.appendChild(line);
}

// Promise chaining demo
promiseBtn.addEventListener("click", function () {
  promiseOutput.innerHTML = "";
  promiseBtn.disabled = true;
  appendLine("დაიწყო...");

  delay(1000)
    .then(function () {
      appendLine("ნაბიჯი 1 ✔ (1 წამის შემდეგ)");
      return delay(1000);
    })
    .then(function () {
      appendLine("ნაბიჯი 2 ✔ (2 წამის შემდეგ)");
      return delay(1000);
    })
    .then(function () {
      appendLine("ნაბიჯი 3 ✔ (3 წამის შემდეგ)");
      appendLine("დასრულდა!");
      promiseBtn.disabled = false;
    })
    .catch(function (err) {
      appendLine("შეცდომა: " + err.message);
      promiseBtn.disabled = false;
    });
});

// Promise.all demo
promiseAllBtn.addEventListener("click", function () {
  promiseOutput.innerHTML = "";
  promiseAllBtn.disabled = true;
  appendLine("Promise.all — 3 ოპერაცია პარალელურად...");

  var start = Date.now();

  var p1 = delay(1000).then(function () {
    return "ოპერაცია A (1წმ)";
  });
  var p2 = delay(2000).then(function () {
    return "ოპერაცია B (2წმ)";
  });
  var p3 = delay(1500).then(function () {
    return "ოპერაცია C (1.5წმ)";
  });

  Promise.all([p1, p2, p3])
    .then(function (results) {
      var elapsed = ((Date.now() - start) / 1000).toFixed(1);
      results.forEach(function (r) {
        appendLine("✔ " + r);
      });
      appendLine("ყველა დასრულდა " + elapsed + " წამში (არა 4.5!)");
      promiseAllBtn.disabled = false;
    })
    .catch(function (err) {
      appendLine("შეცდომა: " + err.message);
      promiseAllBtn.disabled = false;
    });
});

// ─── 5. Fetch API ───────────────────────────────────────

console.log("\n--- Fetch API ---");

var fetchOutput = document.getElementById("fetch-output");

// Load users
document
  .getElementById("load-users-btn")
  .addEventListener("click", function () {
    fetchOutput.innerHTML = '<div class="loading">იტვირთება...</div>';

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP შეცდომა: " + response.status);
        }
        return response.json();
      })
      .then(function (users) {
        fetchOutput.innerHTML = "";

        users.forEach(function (user) {
          var card = document.createElement("div");
          card.classList.add("user-card");
          card.innerHTML =
            "<h3>" +
            user.name +
            "</h3>" +
            "<p>Email: " +
            user.email +
            "</p>" +
            "<p>ქალაქი: " +
            user.address.city +
            "</p>" +
            "<p>კომპანია: " +
            user.company.name +
            "</p>";
          fetchOutput.appendChild(card);
        });

        console.log(users.length + " მომხმარებელი ჩაიტვირთა");
      })
      .catch(function (error) {
        fetchOutput.innerHTML =
          '<div class="error">შეცდომა: ' + error.message + "</div>";
        console.log("Fetch შეცდომა:", error);
      });
  });

// Load single post
document.getElementById("load-post-btn").addEventListener("click", function () {
  var postId = document.getElementById("fetch-post-id").value || 1;
  fetchOutput.innerHTML = '<div class="loading">იტვირთება...</div>';

  fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
    .then(function (response) {
      console.log(response);

      if (!response.ok) {
        throw new Error("HTTP შეცდომა: " + response.status);
      }
      return response.json();
    })
    .then(function (post) {
      fetchOutput.innerHTML = "";

      var card = document.createElement("div");
      card.classList.add("user-card");
      card.innerHTML =
        "<h3>" +
        post.title +
        "</h3>" +
        "<p>" +
        post.body +
        "</p>" +
        "<p><strong>Post ID: " +
        post.id +
        "</strong></p>";
      fetchOutput.appendChild(card);

      console.log("პოსტი ჩაიტვირთა:", post.title);
    })
    .catch(function (error) {
      fetchOutput.innerHTML =
        '<div class="error">შეცდომა: ' + error.message + "</div>";
    });
});

// 404 error test
document
  .getElementById("load-error-btn")
  .addEventListener("click", function () {
    fetchOutput.innerHTML = '<div class="loading">იტვირთება...</div>';

    fetch("https://jsonplaceholder.typicode.com/users/999")
      .then(function (response) {
        console.log("response.ok:", response.ok);
        console.log("response.status:", response.status);

        if (!response.ok) {
          throw new Error("HTTP შეცდომა: " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        fetchOutput.innerHTML =
          '<div class="user-card"><p>' + JSON.stringify(data) + "</p></div>";
      })
      .catch(function (error) {
        fetchOutput.innerHTML =
          '<div class="error">შეცდომა: ' +
          error.message +
          "<br>fetch 404-ზე reject-ს არ აკეთებს — response.ok ხელით შევამოწმეთ!</div>";
        console.log("404 დამუშავდა:", error.message);
      });
  });

// ─── 6. async/await ─────────────────────────────────────

console.log("\n--- async/await ---");

var asyncOutput = document.getElementById("async-output");

// async/await — users
document
  .getElementById("async-users-btn")
  .addEventListener("click", async function () {
    asyncOutput.innerHTML = '<div class="loading">იტვირთება...</div>';

    try {
      var response = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(response);

      if (!response.ok) {
        throw new Error("HTTP შეცდომა: " + response.status);
      }

      var users = await response.json();
      asyncOutput.innerHTML = "";

      users.forEach(function (user) {
        var card = document.createElement("div");
        card.classList.add("user-card");
        card.innerHTML =
          "<h3>" +
          user.name +
          "</h3>" +
          "<p>Email: " +
          user.email +
          "</p>" +
          "<p>ქალაქი: " +
          user.address.city +
          "</p>";
        asyncOutput.appendChild(card);
      });

      console.log("async/await:", users.length + " მომხმარებელი");
    } catch (error) {
      asyncOutput.innerHTML =
        '<div class="error">შეცდომა: ' + error.message + "</div>";
    }
  });

// Promise.all + await
document
  .getElementById("async-parallel-btn")
  .addEventListener("click", async function () {
    asyncOutput.innerHTML = '<div class="loading">იტვირთება...</div>';

    try {
      var start = Date.now();

      var results = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(function (r) {
          return r.json();
        }),
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then(
          function (r) {
            return r.json();
          },
        ),
      ]);

      var users = results[0];
      var posts = results[1];
      var elapsed = ((Date.now() - start) / 1000).toFixed(1);

      asyncOutput.innerHTML = "";

      var infoCard = document.createElement("div");
      infoCard.classList.add("user-card");
      infoCard.innerHTML =
        "<h3>Promise.all + await</h3>" +
        "<p>" +
        users.length +
        " მომხმარებელი + " +
        posts.length +
        " პოსტი</p>" +
        "<p>დრო: " +
        elapsed +
        " წამი (პარალელურად!)</p>";
      asyncOutput.appendChild(infoCard);

      console.log(
        "Parallel:",
        users.length,
        "users +",
        posts.length,
        "posts in",
        elapsed,
        "s",
      );
    } catch (error) {
      asyncOutput.innerHTML =
        '<div class="error">შეცდომა: ' + error.message + "</div>";
    }
  });

// ─── 7. POST / PUT / DELETE ─────────────────────────────

console.log("\n--- POST / PUT / DELETE ---");

var crudOutput = document.getElementById("crud-output");

function crudLog(text) {
  var line = document.createElement("div");
  line.textContent = text;
  crudOutput.appendChild(line);
}

// POST
document
  .getElementById("create-post-btn")
  .addEventListener("click", async function () {
    var title = document.getElementById("post-title").value.trim();
    var body = document.getElementById("post-body").value.trim();

    if (!title) {
      crudOutput.innerHTML = '<div class="error">სათაური აუცილებელია</div>';
      return;
    }

    crudOutput.innerHTML = "";
    crudLog("POST იგზავნება...");

    try {
      var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, body: body, userId: 1 }),
      });

      if (!response.ok) throw new Error("POST ვერ შესრულდა");

      var newPost = await response.json();
      crudLog("შეიქმნა! ID: " + newPost.id);
      crudLog("სათაური: " + newPost.title);
      console.log("POST response:", newPost);
    } catch (error) {
      crudLog("შეცდომა: " + error.message);
    }
  });

// PUT
document
  .getElementById("update-post-btn")
  .addEventListener("click", async function () {
    var postId = document.getElementById("crud-post-id").value || 1;
    crudOutput.innerHTML = "";
    crudLog("PUT იგზავნება (პოსტი #" + postId + ")...");

    try {
      var response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: Number(postId),
            title: "განახლებული სათაური",
            body: "განახლებული ტექსტი",
            userId: 1,
          }),
        },
      );

      if (!response.ok) throw new Error("PUT ვერ შესრულდა");

      var updated = await response.json();
      crudLog("განახლდა!");
      crudLog("სათაური: " + updated.title);
      crudLog("ტექსტი: " + updated.body);
      console.log("PUT response:", updated);
    } catch (error) {
      crudLog("შეცდომა: " + error.message);
    }
  });

// DELETE
document
  .getElementById("delete-post-btn")
  .addEventListener("click", async function () {
    var postId = document.getElementById("crud-post-id").value || 1;
    crudOutput.innerHTML = "";
    crudLog("DELETE იგზავნება (პოსტი #" + postId + ")...");

    try {
      var response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId,
        {
          method: "DELETE",
        },
      );
      console.log(response);

      if (!response.ok) throw new Error("DELETE ვერ შესრულდა");

      crudLog("პოსტი #" + postId + " წაიშალა!");
      crudLog("(JSONPlaceholder სიმულაციას აკეთებს — რეალურად არ წაიშლება)");
      console.log("DELETE status:", response.status);
    } catch (error) {
      crudLog("შეცდომა: " + error.message);
    }
  });
