"use strict";

////////////////////////////////////
// ინტერაქტიული დემო — Starter
////////////////////////////////////

// ეს ფაილი შეიცავს მონაცემებსა და დამხმარე ფუნქციებს.
// თქვენ უნდა დაწეროთ TODO-ებით მონიშნული ფუნქციები.
// ყოველი TODO-ს აღწერაში მოცემულია რა კონცეფციას იყენებს
// და რა უნდა გააკეთოს ფუნქციამ.

// ========== მონაცემები ==========

const PRODUCTS = [
  { id: 1, name: "MacBook Pro 14", category: "electronics", price: 4999 },
  { id: 2, name: "iPhone 15 Pro", category: "electronics", price: 2999 },
  { id: 3, name: "Samsung Galaxy S24", category: "electronics", price: 1999 },
  { id: 4, name: "AirPods Pro", category: "electronics", price: 699 },
  { id: 5, name: "iPad Air", category: "electronics", price: 1899 },
  { id: 6, name: "Nike Air Max", category: "clothing", price: 399 },
  { id: 7, name: "Adidas Ultraboost", category: "clothing", price: 449 },
  { id: 8, name: "Levi's 501", category: "clothing", price: 199 },
  { id: 9, name: "North Face Jacket", category: "clothing", price: 599 },
  { id: 10, name: "Converse All Star", category: "clothing", price: 249 },
  { id: 11, name: "Clean Code", category: "books", price: 89 },
  { id: 12, name: "JavaScript: The Good Parts", category: "books", price: 69 },
  { id: 13, name: "Design Patterns", category: "books", price: 99 },
  { id: 14, name: "The Pragmatic Programmer", category: "books", price: 109 },
  { id: 15, name: "Eloquent JavaScript", category: "books", price: 79 },
  { id: 16, name: "საფეხბურთო ბურთი", category: "sports", price: 79 },
  { id: 17, name: "იოგა მატი", category: "sports", price: 59 },
  { id: 18, name: "ჩოგბურთის რაკეტი", category: "sports", price: 349 },
  { id: 19, name: "კალათბურთის ბურთი", category: "sports", price: 99 },
  { id: 20, name: "სარბენი ფეხსაცმელი", category: "sports", price: 299 },
];

const CATEGORY_LABELS = {
  all: "ყველა",
  electronics: "ელექტრონიკა",
  clothing: "ტანსაცმელი",
  books: "წიგნები",
  sports: "სპორტი",
};

const ITEMS_PER_PAGE = 4;
const NOTES_KEY = "demo_notes";

// ========== დამხმარე ფუნქციები (მზად არის, გამოიყენეთ) ==========

const escapeHtml = function (text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

const setCookie = function (name, value, days) {
  let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    cookieString += "; expires=" + date.toUTCString();
  }
  cookieString += "; path=/";
  document.cookie = cookieString;
};

const getCookie = function (name) {
  const encodedName = encodeURIComponent(name) + "=";
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].startsWith(encodedName)) {
      return decodeURIComponent(cookies[i].substring(encodedName.length));
    }
  }
  return null;
};

const getAllCookies = function () {
  if (!document.cookie) return {};
  return document.cookie.split("; ").reduce(function (obj, cookie) {
    const separatorIndex = cookie.indexOf("=");
    const key = decodeURIComponent(cookie.substring(0, separatorIndex));
    const value = decodeURIComponent(cookie.substring(separatorIndex + 1));
    obj[key] = value;
    return obj;
  }, {});
};

const detectBrowser = function () {
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  return "Unknown";
};

// ========== TODO 1: Hash-based Router ==========
// location.hash-ს ვიყენებთ ნავიგაციისთვის.
// ფორმატი: #page?param1=value1&param2=value2
//
// parseHash() უნდა დააბრუნოს ობიექტი: { page: string, params: URLSearchParams }
// მაგალითი: "#products?category=books&page=2"
// → { page: "products", params: URLSearchParams({category: "books", page: "2"}) }
//
// hint: location.hash.slice(1) — hash-ი #-ის გარეშე
// hint: hash.indexOf("?") — ? სიმბოლოს პოზიცია
// hint: new URLSearchParams(queryString) — query string-ის parsing

const parseHash = function () {
  // TODO: დაწერეთ ფუნქცია
  return { page: "home", params: new URLSearchParams() };
};

// navigateTo(page, params) — hash-ის შეცვლა ნავიგაციისთვის
// page: "products", params: URLSearchParams → location.hash = "#products?category=books"

const navigateTo = function (page, params) {
  // TODO: ააწყვეთ hash string და მიანიჭეთ location.hash-ს
};

// ========== TODO 2: URL Inspector ==========
// location ობიექტის თვისებები (href, protocol, host, pathname, hash)
// უნდა აისახოს ქვედა პანელის ელემენტებში.
// ელემენტების id-ები: ui-href, ui-protocol, ui-host, ui-pathname, ui-hash, ui-page, ui-params

const updateUrlInspector = function () {
  // TODO: document.getElementById("ui-href").textContent = location.href;
  // TODO: დანარჩენი location თვისებები
  // TODO: parseHash()-ის შედეგიდან page და params
};

// ========== TODO 3: Theme Manager — localStorage ==========
// initTheme: localStorage-დან წაიკითხეთ "demo_theme" გასაღები.
//   თუ "dark"-ია, body-ს დაამატეთ "dark-theme" კლასი.
//   ბოლოს გამოიძახეთ updateThemeButton().
//
// toggleTheme: body-ზე "dark-theme" კლასის გადართვა (classList.toggle).
//   ახალი მდგომარეობა შეინახეთ localStorage-ში ("dark" ან "light").
//   ბოლოს გამოიძახეთ updateThemeButton().

const initTheme = function () {
  // TODO: localStorage.getItem("demo_theme") → classList.add
};

const toggleTheme = function () {
  // TODO: classList.toggle → localStorage.setItem
};

const updateThemeButton = function () {
  const isDark = document.body.classList.contains("dark-theme");
  document.getElementById("theme-toggle").textContent = isDark
    ? "Light Mode"
    : "Dark Mode";
};

// ========== TODO 4: Cookie Banner ==========
// initCookieBanner: შეამოწმეთ "demo_consent" cookie (getCookie გამოიყენეთ).
//   თუ არ არსებობს, cookie-banner ელემენტს ამოაშალეთ "hidden" კლასი.

const initCookieBanner = function () {
  // TODO: getCookie("demo_consent") → classList.remove("hidden")
};

// ========== TODO 5: Visit Counter — Cookies ==========
// updateVisitCount: წაიკითხეთ "demo_visits" cookie, გაზარდეთ 1-ით,
//   შეინახეთ cookie-ში (setCookie), და აჩვენეთ #visit-count ელემენტში.

const updateVisitCount = function () {
  // TODO: getCookie → parseInt → setCookie → textContent
};

// ========== TODO 6: Notes Manager — localStorage ==========
// ჩანიშვნები localStorage-ში ინახება NOTES_KEY გასაღებით, JSON ფორმატში.
// თითოეული ჩანიშვნა არის ობიექტი: { id: number, text: string, date: string }

const getNotes = function () {
  // TODO: localStorage.getItem(NOTES_KEY) → JSON.parse
  // თუ ცარიელია, დააბრუნეთ ცარიელი მასივი
  return [];
};

const saveNotes = function (notes) {
  // TODO: JSON.stringify(notes) → localStorage.setItem(NOTES_KEY, ...)
};

const addNote = function (text) {
  // TODO: getNotes(), unshift({ id: Date.now(), text, date }), saveNotes()
};

const deleteNote = function (id) {
  // TODO: getNotes(), filter (id-ით), saveNotes()
};

const clearAllNotes = function () {
  // TODO: localStorage.removeItem(NOTES_KEY)
};

// ========== TODO 7: renderHome ==========
// მთავარი გვერდი — ბრაუზერის ინფორმაციის ბარათები + storage მონიტორი.
// გამოიყენეთ: detectBrowser(), navigator.language, navigator.onLine,
//   navigator.platform, window.innerWidth/innerHeight, screen.width/height,
//   window.devicePixelRatio, navigator.cookieEnabled
// localStorage-ის შიგთავსი: for loop localStorage.length-ით, localStorage.key(i)
// Cookies-ის შიგთავსი: getAllCookies()
//
// HTML კლასები (index.html-ში უკვე არის CSS):
//   .welcome-text, .section-heading, .info-grid, .info-tile, .label, .value
//   .card, .storage-table, .empty-state

const renderHome = function () {
  const app = document.getElementById("app");

  // TODO: ბრაუზერის ინფორმაცია ობიექტში შეაგროვეთ
  // TODO: localStorage-ის key/value წყვილები მასივში შეაგროვეთ
  // TODO: getAllCookies()-ით cookies შეაგროვეთ
  // TODO: app.innerHTML — ყველაფერი HTML-ით აჩვენეთ

  app.innerHTML =
    '<h2 class="page-title">მთავარი</h2>' +
    '<p class="empty-state">TODO: ბრაუზერის ინფორმაცია + Storage მონიტორი</p>';
};

// ========== TODO 8: renderProducts ==========
// პროდუქტების გვერდი — ფილტრაცია კატეგორიით + პაგინაცია.
// params არის URLSearchParams ობიექტი (parseHash()-დან).
//   params.get("category") — მიმდინარე კატეგორია (default: "all")
//   params.get("page") — მიმდინარე გვერდი (default: 1)
//
// ნაბიჯები:
// 1. PRODUCTS მასივის ფილტრაცია currentCategory-ით
// 2. totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
// 3. pageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE)
// 4. ფილტრის ღილაკები: .filter-btn (data-category ატრიბუტით)
// 5. პროდუქტების ბარათები: .products-grid > .product-card
// 6. პაგინაციის ღილაკები: .pagination > .page-btn (data-page ატრიბუტით)
// 7. click event-ები: ფილტრზე/გვერდზე დაჭერისას navigateTo() გამოიძახეთ
//
// ფასი ლარის სიმბოლოთი: p.price + " &#8382;"

const renderProducts = function (params) {
  const app = document.getElementById("app");
  const currentCategory = params.get("category") || "all";
  let currentPage = parseInt(params.get("page")) || 1;

  // TODO: ფილტრაცია
  // TODO: პაგინაცია — totalPages, startIndex, pageItems
  // TODO: ფილტრის ღილაკების HTML (CATEGORY_LABELS-ის ყველა key-ზე)
  // TODO: პროდუქტების HTML (.product-card)
  // TODO: პაგინაციის ღილაკები (.page-btn)
  // TODO: app.innerHTML = ყველა ნაწილი ერთად
  // TODO: event listeners — filter ღილაკებზე და page ღილაკებზე
  //       click-ზე navigateTo("products", newParams) გამოიძახეთ

  app.innerHTML =
    '<h2 class="page-title">პროდუქტები</h2>' +
    '<p class="empty-state">TODO: პროდუქტების ბარათები + ფილტრაცია + პაგინაცია</p>';
};

// ========== TODO 9: renderNotes ==========
// ჩანიშვნების გვერდი — localStorage CRUD.
// 1. getNotes()-ით ჩატვირთეთ ჩანიშვნები
// 2. ფორმა: input (.note-input, id="note-input") + ღილაკი (.btn-primary, id="add-note")
// 3. სტატისტიკა: .notes-header > .notes-count + "ყველას წაშლა" ღილაკი
// 4. სია: .note-item (data-id ატრიბუტით) > .note-text + .note-date + .btn-danger.delete-note
// 5. Event listeners:
//    - add ღილაკი / Enter: addNote(text) → renderNotes()
//    - delete ღილაკი: deleteNote(id) → renderNotes()
//    - clear ღილაკი: clearAllNotes() → renderNotes()
// 6. ბოლოს: noteInput.focus()
//
// XSS-ისგან დაცვა: escapeHtml(note.text) გამოიყენეთ innerHTML-ში

const renderNotes = function () {
  const app = document.getElementById("app");
  const notes = getNotes();

  // TODO: ჩანიშვნების HTML — ცარიელი state ან note-item ელემენტები
  // TODO: ფორმის HTML
  // TODO: app.innerHTML
  // TODO: event listeners (click, keydown Enter)

  app.innerHTML =
    '<h2 class="page-title">ჩანიშვნები</h2>' +
    '<p class="empty-state">TODO: ჩანიშვნების ფორმა + სია</p>';
};

// ========== TODO 10: Router ==========
// route ფუნქცია ყოველ hashchange-ზე გამოიძახება.
// 1. parseHash()-ით მიიღეთ page და params
// 2. .nav-link ელემენტებზე active კლასის განახლება
// 3. switch-ით page-ის მიხედვით: renderHome / renderProducts / renderNotes
// 4. updateUrlInspector()

const route = function () {
  const hashParsed = parseHash();

  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.toggle("active", link.dataset.page === hashParsed.page);
  });

  // TODO: switch (hashParsed.page) — "products", "notes", default → render ფუნქციები
  // TODO: updateUrlInspector()

  renderHome();
};

// ========== ინიციალიზაცია (მზად არის) ==========

initTheme();
initCookieBanner();
updateVisitCount();

document
  .getElementById("theme-toggle")
  .addEventListener("click", toggleTheme);

document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    setCookie("demo_consent", "accepted", 365);
    document.getElementById("cookie-banner").classList.add("hidden");
  });

document
  .getElementById("decline-cookies")
  .addEventListener("click", function () {
    setCookie("demo_consent", "declined", 7);
    document.getElementById("cookie-banner").classList.add("hidden");
  });

window.addEventListener("hashchange", route);

route();
