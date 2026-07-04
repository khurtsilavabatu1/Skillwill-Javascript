"use strict";

const API_URL = "http://localhost:3000/users";

// =============================================================
//  სტუდენტის ნაწილი — შევსებული fetch ფუნქციები
//  დოკუმენტაცია: გახსენი api-docs.html
// =============================================================

// -------- 1. registerUser --------

async function registerUser(name, email, password, city) {
  var response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, email: email, password: password, city: city }),
  });

  if (!response.ok) throw new Error("რეგისტრაცია ვერ მოხერხდა");

  return response.json();
}

// -------- 2. loginUser --------

async function loginUser(email, password) {
  var response = await fetch(
    API_URL + "?email=" + email + "&password=" + password
  );

  if (!response.ok) throw new Error("სერვერის შეცდომა");

  var users = await response.json();
  return users.length > 0 ? users[0] : null;
}

// -------- 3. getUserProfile --------

async function getUserProfile(userId) {
  var response = await fetch(API_URL + "/" + userId);

  if (!response.ok) throw new Error("მომხმარებელი ვერ მოიძებნა");

  return response.json();
}

// -------- 4. updateUser --------

async function updateUser(userId, data) {
  var response = await fetch(API_URL + "/" + userId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("განახლება ვერ მოხერხდა");

  return response.json();
}

// -------- 5. deleteUser --------

async function deleteUser(userId) {
  var response = await fetch(API_URL + "/" + userId, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("წაშლა ვერ მოხერხდა");

  return true;
}

// =============================================================
//  მზა ნაწილი — UI ლოგიკა (არ შეცვალო!)
// =============================================================

var statusMessage = document.getElementById("statusMessage");

function showStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = "status-message " + type;
}

function hideStatus() {
  statusMessage.className = "status-message";
}

// ─── index.html — ლოგინი / რეგისტრაცია ──────────────────────

var loginTab = document.getElementById("loginTab");
var registerTab = document.getElementById("registerTab");
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

if (loginTab && registerTab) {
  loginTab.addEventListener("click", function () {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    hideStatus();
  });

  registerTab.addEventListener("click", function () {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
    hideStatus();
  });

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value.trim();

    showStatus("შესვლა...", "loading");

    try {
      var user = await loginUser(email, password);

      if (!user) {
        showStatus("არასწორი ემაილი ან პაროლი", "error");
        return;
      }

      localStorage.setItem("userId", user.id);
      showStatus("წარმატებით შეხვედით!", "success");
      setTimeout(function () {
        window.location.href = "cabinet.html";
      }, 500);
    } catch (error) {
      showStatus("შეცდომა: " + error.message, "error");
    }
  });

  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    var name = document.getElementById("regName").value.trim();
    var email = document.getElementById("regEmail").value.trim();
    var password = document.getElementById("regPassword").value.trim();
    var city = document.getElementById("regCity").value.trim();

    showStatus("რეგისტრაცია...", "loading");

    try {
      var newUser = await registerUser(name, email, password, city);

      if (newUser && newUser.id) {
        showStatus("რეგისტრაცია წარმატებულია! გაიარეთ ავტორიზაცია.", "success");
        registerForm.reset();
        setTimeout(function () {
          loginTab.click();
        }, 1000);
      }
    } catch (error) {
      showStatus("რეგისტრაცია ვერ მოხერხდა: " + error.message, "error");
    }
  });
}

// ─── cabinet.html — კაბინეტი ─────────────────────────────────

var profileName = document.getElementById("profileName");
var profileEmail = document.getElementById("profileEmail");
var profileCity = document.getElementById("profileCity");
var editForm = document.getElementById("editForm");
var deleteAccountBtn = document.getElementById("deleteAccountBtn");
var logoutBtn = document.getElementById("logoutBtn");

if (profileName && editForm) {
  var userId = localStorage.getItem("userId");

  if (!userId) {
    window.location.href = "index.html";
  }

  async function loadProfile() {
    showStatus("იტვირთება...", "loading");

    try {
      var user = await getUserProfile(userId);

      profileName.textContent = user.name;
      profileEmail.textContent = user.email;
      profileCity.textContent = user.city;

      document.getElementById("editName").value = user.name;
      document.getElementById("editEmail").value = user.email;
      document.getElementById("editCity").value = user.city;

      hideStatus();
    } catch (error) {
      showStatus("პროფილი ვერ ჩაიტვირთა: " + error.message, "error");
    }
  }

  editForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    var data = {
      name: document.getElementById("editName").value.trim(),
      email: document.getElementById("editEmail").value.trim(),
      city: document.getElementById("editCity").value.trim(),
    };

    showStatus("მიმდინარეობს განახლება...", "loading");

    try {
      await updateUser(userId, data);
      showStatus("პროფილი განახლდა!", "success");
      await loadProfile();
    } catch (error) {
      showStatus("განახლება ვერ მოხერხდა: " + error.message, "error");
    }
  });

  deleteAccountBtn.addEventListener("click", async function () {
    var confirmed = confirm(
      "ნამდვილად გსურთ ანგარიშის წაშლა? ეს მოქმედება შეუქცევადია!"
    );

    if (!confirmed) return;

    showStatus("იშლება...", "loading");

    try {
      await deleteUser(userId);
      localStorage.removeItem("userId");
      alert("ანგარიში წაიშალა.");
      window.location.href = "index.html";
    } catch (error) {
      showStatus("წაშლა ვერ მოხერხდა: " + error.message, "error");
    }
  });

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("userId");
    window.location.href = "index.html";
  });

  loadProfile();
}
