"use strict";

const API_URL = "http://localhost:3000/users";

// =============================================================
//  სტუდენტის ნაწილი — შეავსე fetch ფუნქციები
//  დოკუმენტაცია: გახსენი api-docs.html
// =============================================================

// -------- 1. registerUser --------
// POST /users
// ქმნის ახალ მომხმარებელს
// პარამეტრები: name, email, password, city
// უნდა დააბრუნოს: response.json() — შექმნილი მომხმარებლის ობიექტი

async function registerUser(name, email, password, city) {
  // TODO: გააგზავნე POST მოთხოვნა API_URL-ზე
  // headers: { "Content-Type": "application/json" }
  // body: { name, email, password, city }
  // შეამოწმე response.ok — თუ არა, გააკეთე throw new Error("რეგისტრაცია ვერ მოხერხდა")
  // დააბრუნე response.json()
}

// -------- 2. loginUser --------
// GET /users?email=...&password=...
// ეძებს მომხმარებელს ემაილითა და პაროლით
// პარამეტრები: email, password
// უნდა დააბრუნოს: მომხმარებლის ობიექტი ან null

async function loginUser(email, password) {
  // TODO: გააგზავნე GET მოთხოვნა query პარამეტრებით
  // URL: API_URL + "?email=" + email + "&password=" + password
  // შეამოწმე response.ok — თუ არა, გააკეთე throw new Error("სერვერის შეცდომა")
  // json-server მასივს დააბრუნებს — წამოიღე პირველი ელემენტი
  // თუ მასივი ცარიელია, დააბრუნე null
}

// -------- 3. getUserProfile --------
// GET /users/:id
// წამოიღებს კონკრეტული მომხმარებლის მონაცემებს
// პარამეტრი: userId
// უნდა დააბრუნოს: მომხმარებლის ობიექტი

async function getUserProfile(userId) {
  // TODO: გააგზავნე GET მოთხოვნა API_URL + "/" + userId
  // შეამოწმე response.ok — თუ არა, გააკეთე throw new Error("მომხმარებელი ვერ მოიძებნა")
  // დააბრუნე response.json()
}

// -------- 4. updateUser --------
// PATCH /users/:id
// ანახლებს მომხმარებლის მონაცემებს (მხოლოდ გადაცემულ ველებს)
// პარამეტრები: userId, data (ობიექტი: { name, email, city })
// უნდა დააბრუნოს: განახლებული მომხმარებლის ობიექტი

async function updateUser(userId, data) {
  // TODO: გააგზავნე PATCH მოთხოვნა API_URL + "/" + userId
  // method: "PATCH"
  // headers: { "Content-Type": "application/json" }
  // body: JSON.stringify(data)
  // შეამოწმე response.ok — თუ არა, გააკეთე throw new Error("განახლება ვერ მოხერხდა")
  // დააბრუნე response.json()
}

// -------- 5. deleteUser --------
// DELETE /users/:id
// წაშლის მომხმარებლის ანგარიშს
// პარამეტრი: userId
// უნდა დააბრუნოს: true (წარმატებით) ან throw Error

async function deleteUser(userId) {
  // TODO: გააგზავნე DELETE მოთხოვნა API_URL + "/" + userId
  // შეამოწმე response.ok — თუ არა, გააკეთე throw new Error("წაშლა ვერ მოხერხდა")
  // დააბრუნე true
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

    // TODO: გამოიყენე try/catch
    // try ბლოკში:
    //   - გამოიძახე loginUser(email, password) და შეინახე ცვლადში (await!)
    //   - თუ user არ მოიძებნა (null), გამოიტანე: showStatus("არასწორი ემაილი ან პაროლი", "error") და გააკეთე return
    //   - თუ მოიძებნა, შეინახე userId localStorage-ში: localStorage.setItem("userId", user.id)
    //   - გამოიტანე: showStatus("წარმატებით შეხვედით!", "success")
    //   - setTimeout-ით 500ms-ში გადაამისამართე: window.location.href = "cabinet.html"
    // catch ბლოკში:
    //   - გამოიტანე: showStatus("შეცდომა: " + error.message, "error")
  });

  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    var name = document.getElementById("regName").value.trim();
    var email = document.getElementById("regEmail").value.trim();
    var password = document.getElementById("regPassword").value.trim();
    var city = document.getElementById("regCity").value.trim();

    showStatus("რეგისტრაცია...", "loading");

    // TODO: გამოიყენე try/catch
    // try ბლოკში:
    //   - გამოიძახე registerUser(name, email, password, city) და შეინახე ცვლადში (await!)
    //   - თუ newUser და newUser.id არსებობს:
    //     - გამოიტანე: showStatus("რეგისტრაცია წარმატებულია! გაიარეთ ავტორიზაცია.", "success")
    //     - გაასუფთავე ფორმა: registerForm.reset()
    //     - setTimeout-ით 1000ms-ში გადართე ლოგინის ტაბზე: loginTab.click()
    // catch ბლოკში:
    //   - გამოიტანე: showStatus("რეგისტრაცია ვერ მოხერხდა: " + error.message, "error")
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

    // TODO: გამოიყენე try/catch
    // try ბლოკში:
    //   - გამოიძახე getUserProfile(userId) და შეინახე ცვლადში (await!)
    //   - შეავსე პროფილის ინფორმაცია:
    //     profileName.textContent = user.name
    //     profileEmail.textContent = user.email
    //     profileCity.textContent = user.city
    //   - შეავსე რედაქტირების ფორმის ველები:
    //     document.getElementById("editName").value = user.name
    //     document.getElementById("editEmail").value = user.email
    //     document.getElementById("editCity").value = user.city
    //   - დამალე სტატუსი: hideStatus()
    // catch ბლოკში:
    //   - გამოიტანე: showStatus("პროფილი ვერ ჩაიტვირთა: " + error.message, "error")
  }

  editForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    var data = {
      name: document.getElementById("editName").value.trim(),
      email: document.getElementById("editEmail").value.trim(),
      city: document.getElementById("editCity").value.trim(),
    };

    showStatus("მიმდინარეობს განახლება...", "loading");

    // TODO: გამოიყენე try/catch
    // try ბლოკში:
    //   - გამოიძახე updateUser(userId, data) (await!)
    //   - გამოიტანე: showStatus("პროფილი განახლდა!", "success")
    //   - თავიდან ჩატვირთე პროფილი: await loadProfile()
    // catch ბლოკში:
    //   - გამოიტანე: showStatus("განახლება ვერ მოხერხდა: " + error.message, "error")
  });

  deleteAccountBtn.addEventListener("click", async function () {
    var confirmed = confirm(
      "ნამდვილად გსურთ ანგარიშის წაშლა? ეს მოქმედება შეუქცევადია!"
    );

    if (!confirmed) return;

    showStatus("იშლება...", "loading");

    // TODO: გამოიყენე try/catch
    // try ბლოკში:
    //   - გამოიძახე deleteUser(userId) (await!)
    //   - წაშალე userId localStorage-დან: localStorage.removeItem("userId")
    //   - გამოიტანე alert: alert("ანგარიში წაიშალა.")
    //   - გადაამისამართე: window.location.href = "index.html"
    // catch ბლოკში:
    //   - გამოიტანე: showStatus("წაშლა ვერ მოხერხდა: " + error.message, "error")
  });

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("userId");
    window.location.href = "index.html";
  });

  loadProfile();
}
